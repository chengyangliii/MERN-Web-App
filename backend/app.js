const express = require('express')
const cor = require('cors')
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const morgan = require('morgan')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");

require('dotenv').config({path: './config/.env'})
connectDB()
const app = express()
const port = process.env.PORT || 5000

// Body parser middleware
app.use(express.urlencoded({ extended: false})) 
app.use(express.json())
app.use(cor({
  origin: "http://localhost:3000",
  credentials: true
}))
app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    //cookie: { secure: true }, //true when https
    store: new MongoStore({mongooseConnection: mongoose.connection })
  })
)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser("keyboard cat"))
app.use(passport.initialize())
app.use(passport.session())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.static(path.join(__dirname, 'public')))
 
//----------------------------------------- END OF common middleware---------------------------------------------------
//----------------------------------------- BEGIN OF Passport-Local ---------------------------------------------------

const User = require("./models/User_2")
const Story = require('./models/Story')
require('./passport-local')(passport)

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
app.get("/user", (req, res) => {
  console.log(req.user)
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});
//app.use('/stories', require('./routes/stories'))
app.get("/stories", (req, res) => {
  Story.find()
    .then(stories => res.json(stories))
    .catch(err => res.send(err))
})
app.post("/stories", (req, res) => {
  req.body.user = req.user.id
  console.log(req.body)
  Story.create(req.body)
   .then(res => res.json("Story created"))
   .catch(err => res.send(err))
})

//----------------------------------------- END OF Passport-Local ---------------------------------------------------
//----------------------------------------- BEGIN OF Passport-Google ---------------------------------------------------

// Passport config
require('./passport')(passport)
app.use('/api', (req, res) => res.send('Hello World shime'))
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))


app.use('/exercises', require('./routes/exercises'))
app.use('/users', require('./routes/users'))
// app.use('/mathpapers', require('./routes/maths'))

// Handlebars Helpers
const {
    formatDate,
    stripTags,
    truncate,
    editIcon,
    select,
  } = require('./helpers/hbs')

// Handlebars
app.engine(
    '.hbs',
    exphbs({
      helpers: {
        formatDate,
        stripTags,
        truncate,
        editIcon,
        select,
      },
      defaultLayout: 'main',
      extname: '.hbs',
    })
  )
  app.set('view engine', '.hbs')
  // Method override
app.use(
  methodOverride(function (req, res) {
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
      }
  })
)

//----------------------------------------- END OF Passport-Google ---------------------------------------------------


// JWT block
// app.get('/api', (req, res) => {
//     res.json({
//       message: 'Welcome to the API'
//     });
// });

// app.post('/api/login', (req, res) => {
//     // Mock user
//     const user = {
//         id: 1, 
//         username: 'brad',
//         email: 'brad@gmail.com'
//     }
  
//     jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
//         res.json({
//             token
//         });
//     });
// });

// app.post('/api/posts', verifyToken, (req, res) => {  
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if(err) {
//             res.sendStatus(403);
//         } else {
//             res.json({
//                 message: 'Post created...',
//                 authData
//             });
//         }
//     });
// });

// Verify Token
// function verifyToken(req, res, next) {
//     // Get auth header value
//     const bearerHeader = req.headers['authorization'];
//     // Check if bearer is undefined
//     if(typeof bearerHeader !== 'undefined') {
//       // Split at the space
//       const bearer = bearerHeader.split(' ');
//       // Get token from array
//       const bearerToken = bearer[1];
//       // Set the token
//       req.token = bearerToken;
//       // Next middleware
//       next();
//     } else {
//       // Forbidden
//       res.sendStatus(403);
//     }
// }


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})