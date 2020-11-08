const express = require('express')
const cor = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(cor())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
const connection = mongoose.connection
connection.once('open', ()=> {
    console.log("mongoDB database connection established successfully")
})

const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')

app.use('/exercises', exerciseRouter)
app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})