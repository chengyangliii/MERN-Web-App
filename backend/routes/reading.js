const express = require('express')
const router = express.Router()
const Reading = require('../models/Reading')

// @desc    Get all page
// @route   GET /reading/
router.get("/", (req, res) => {
  Reading.find()
    .then(reading => res.json(reading))
    .catch(err => res.send(err))
})

// @desc    Post a page
// @route   POST /reading/
router.post("/add", (req, res) => {
  req.body.user = req.user.id
  //console.log(req.body)
  Reading.create(req.body)
   .then(res => res.json("Reading created"))
   .catch(err => res.send(err))
})

// @desc    Show single Reading
// @route   GET /stories/:id
// router.get('/:id', ensureAuth, async (req, res) => {
//   try {
//     let Reading = await Reading.findById(req.params.id).populate('user').lean()

//     if (!Reading) {
//       return res.render('error/404')
//     }

//     if (Reading.user._id !== req.user.id && Reading.status === 'private') {
//       res.render('error/404')
//     } else {
//       res.render('stories/show', {
//         Reading,
//       })
//     }
//   } catch (err) {
//     console.error(err)
//     res.render('error/404')
//   }
// })

// @desc    Show edit page
// @route   GET /stories/edit/:id
// router.get('/edit/:id', async (req, res) => {
//   try {
//     const Reading = await Reading.findOne({
//       _id: req.params.id,
//     }).lean()

//     if (!Reading) {
//       return res.render('error/404')
//     }

//     if (Reading.user !== req.user.id) {
//       res.redirect('/stories')
//     } else {
//       res.render('stories/edit', {
//         Reading,
//       })
//     }
//   } catch (err) {
//     console.error(err)
//     return res.render('error/500')
//   }
// })

// // @desc    Update Reading
// // @route   PUT /stories/:id
// router.put('/:id', (req, res) => {
//   try {
//     let reading = Reading.findById(req.params.id).lean()

//     if (!reading) {
//       return res.render('error/404')
//     }

//     if (Reading.user !== req.user.id) {
//       res.redirect('/stories')
//     } else {
//       reading = Reading.findOneAndUpdate({ _id: req.params.id }, req.body, {
//         new: true,
//         runValidators: true,
//       })

//       res.redirect('/dashboard')
//     }
//   } catch (err) {
//     console.error(err)
//     return res.render('error/500')
//   }
// })

// // @desc    Delete Reading
// // @route   DELETE /stories/:id
// router.delete('/:id', async (req, res) => {
//   try {
//     let reading = await Reading.findById(req.params.id).lean()

//     if (!reading) {
//       return res.render('error/404')
//     }

//     if (Reading.user !== req.user.id) {
//       res.redirect('/stories')
//     } else {
//       await Reading.remove({ _id: req.params.id })
//       res.redirect('/dashboard')
//     }
//   } catch (err) {
//     console.error(err)
//     return res.render('error/500')
//   }
// })

// // @desc    User stories
// // @route   GET /stories/user/:userId
// router.get('/user/:userId', async (req, res) => {
//   try {
//     const reading = await Reading.find({
//       user: req.params.userId,
//       status: 'public',
//     })
//       .populate('user')
//       .lean()

//     res.render('stories/index', {
//       stories,
//     })
//   } catch (err) {
//     console.error(err)
//     res.render('error/500')
//   }
// })

module.exports = router