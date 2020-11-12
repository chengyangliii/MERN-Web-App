const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mathSchema = new Schema({
    papername: {
        type: String,
        required: true,
        trim: true,
    },
},{
    timestamps: true,
})

const MathPaper = mongoose.model('MathPaper', mathSchema)

module.exports = MathPaper