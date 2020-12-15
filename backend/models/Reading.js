const mongoose = require('mongoose')

const ReadingSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  body: {
    type: Array,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User_2',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Reading', ReadingSchema)