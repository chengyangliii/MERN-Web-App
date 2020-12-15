const mongoose = require('mongoose')

const Exam_Schema = new mongoose.Schema({
  title: {
    type: String,
  },
  writing: {
    type: Array,
  },
  math1:{
    type: Array,
  },
  reading: {
    type: Array,
  },
  verbal: {
    type: Array,
  },
  math2: {
    type: Array,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User_2',
  },
  student: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Exam', Exam_Schema)