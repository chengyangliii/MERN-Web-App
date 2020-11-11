const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    classname: {
        type: String,
        trim: true,
    }
},{
    timestamps: true,
})

const User = mongoose.model('User', userSchema)

module.exports = User