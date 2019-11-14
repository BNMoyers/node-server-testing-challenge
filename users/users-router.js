const router = require('express').Router();
const db = require('./users-model');

router.post('/', (req, res) => {
    const user = req.body;
    db.add(user)
      .then(user => {
          res.status(201).json(user);
      })
      .catch(err => {
          res.status(500).json(err)
      })
})
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.remove(id)
    .then(() => {
        res.status(200).json({ message: 'removed user'})
    })
    .catch(err => {
        res.status(500).json({ message: 'could not remove user'})
    })
})

module.exports = router;