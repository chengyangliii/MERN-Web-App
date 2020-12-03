const router = require('express').Router()
const User = require('../models/User')
const Story = require('../models/Story')

// ANCHOR Done

/**
 * @describe    Show all users
 * @route       GET /users/
 */
router.get('/', (req, res) => {

    // Story.find({})
    //     .then(users => res.send(users))
    //     .catch(err => res.status(400).json('Error: ' + err))
    
    res.send(req.user)

    //console.log(typeof(req.user.googleId))
    //const id = req.body.user.googleId
    // console.log(req.user._id)
    // User.findById(req.user._id)
    //     .then(users => res.send(users))
    //     .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router

// /**
//  * @describe    Delete a user
//  * @route       DELETE /users/:id
//  */
// router.route('/:id').delete((req, res) => {
//     User.findByIdAndDelete(req.params.id)
//       .then(() => res.json('User deleted.'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

// /**
//  * @describe    Update a user
//  * @route       POST /users/update/:id
//  */
// router.route('/update/:id').post((req, res) => {
//   User.findById(req.params.id)
//     .then(users => {
//       users.username = req.body.username
//       users.classname = req.body.classname

//       users.save()
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err))
//     })
//     .catch(err => res.status(400).json('Error: ' + err))
// });