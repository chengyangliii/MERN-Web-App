const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')
const Story = require('../models/Story')

// @desc    Login/Landing page
// @route   GET /
router.get('/', (req, res) => {
  res.render('login', {
      layout: 'login',
  })
})

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dash', (req, res) => {
    console.log("req.user.id: "+req.user.id)
    //console.log(req.user)
    //console.log(req)
    // try{
    //     const stories = await Story.find({user: req.user.id}).lean()
    //     res.render('dashboard', {
    //         name: req.user.firstName,
    //         stories
    //     })
    //     //res.send(req.user.firstName)
    // }catch (err){
    //     console.log(err)
    //     res.render('error/500')
    // }
        console.log("req.user.id: "+req.user.id)
        Story.find({user: req.user.id})
        .then(
            stories => {
                //console.log(req)
                res.json(stories)
            }
        )

})

module.exports = router