const router = require('express').Router()
let MathPaper = require('../models/math.model')

/**
 * ANCHOR Get all
 */
router.route('/').get((req, res) => {
    MathPaper.find()
        .then(maths => res.json(maths))
        .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * ANCHOR Add one
 */
router.route('/add').post((req, res) => {
    const papername = req.body.papername

    const newMath = new MathPaper({
        papername
    })

    newMath.save()
        .then(() => res.json('Math added!'))
        .catch(err => res.status(400).json('Error: ' + err))
})

/**
 * ANCHOR Delete one
 */
router.route('/:id').delete((req, res) => {
    MathPaper.findByIdAndDelete(req.params.id)
      .then(() => res.json('Math deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  /**
   * ANCHOR Update one by id
   */
  router.route('/update/:id').post((req, res) => {
    MathPaper.findById(req.params.id)
      .then(maths => {
        maths.papername = req.body.papername
  
        maths.save()
          .then(() => res.json('Exercise updated!'))
          .catch(err => res.status(400).json('Error: ' + err))
      })
      .catch(err => res.status(400).json('Error: ' + err))
  });

module.exports = router