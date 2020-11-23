const router = require('express').Router()
const User = require('../models/User')

// ANCHOR Done

/**
 * @describe    Show all users
 * @route       GET /users/
 */
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
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