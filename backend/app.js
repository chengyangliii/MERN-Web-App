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

require('dotenv').config({path: './config/.env'})
connectDB()
const app = express()
const port = process.env.PORT || 5000

// Body parser
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

// Middleware
app.use(cor())

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// // Connect to MongoDB
// const uri = process.env.ATLAS_URI
// mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
// const connection = mongoose.connection
// connection.once('open', ()=> {
//     console.log("mongoDB database connection established successfully")
// })


// Passport config
require('./config/passport')(passport)

// Sessions
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
    store: new MongoStore({mongooseConnection: mongoose.connection })
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/api', (req, res) => res.send('Hello World shime'))
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

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