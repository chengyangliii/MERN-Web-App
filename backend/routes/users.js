const router = require('express').Router()
let User = require('../models/user.model')

/**
 * ANCHOR Get all
 */
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * ANCHOR Add one
 */
router.route('/add').post((req, res) => {
    const username = req.body.username
    const classname = req.body.classname

    const newUser = new User({
        username,
        classname
    })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * ANCHOR Delete one
 */
router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  /**
   * ANCHOR Update one by id
   */
  router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
      .then(users => {
        users.username = req.body.username
        users.classname = req.body.classname
  
        users.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err))
      })
      .catch(err => res.status(400).json('Error: ' + err))
  });

module.exports = router