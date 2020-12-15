const express = require('express')
const router = express.Router()
const Exam = require('../models/Exam')

// 试卷单独创造
// 考试时选择组合
// 

// @desc    Get all math
// @route   GET /exam/
router.get("/", async (req, res) => {
  await Exam.find()
    .then(exam => res.json(exam))
    .catch(err => res.send(err))
})

// @desc    Post a math
// @route   POST /eaxm/add
router.post("/add", (req, res) => {
  req.body.user = req.user.id
  //console.log(req.body)
  Exam.create(req.body)
   .then(res => res.json("Exam created"))
   .catch(err => res.send(err))
})

// @desc    Show single story
// @route   GET /stories/:id
// router.get('/:id', async (req, res) => {
//   try {
//     let story = await Math.findById(req.params.id).populate('user').lean()

//     if (!story) {
//       return res.render('error/404')
//     }

//     if (story.user._id !== req.user.id && story.status === 'private') {
//       res.render('error/404')
//     } else {
//       res.render('stories/show', {
//         story,
//       })
//     }
//   } catch (err) {
//     console.error(err)
//     res.render('error/404')
//   }
// })



module.exports = router