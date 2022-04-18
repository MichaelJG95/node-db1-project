const router = require('express').Router()
const Accounts = require('./accounts-model')
const { checkAccountId } = require('./accounts-middleware')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const data = await Accounts.getAll()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  res.status(200).json(req.existingAccount)
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  res.send('not there yet')
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  res.send('not there yet')
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  res.send('not there yet')
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.send('not there yet')
})

module.exports = router;
