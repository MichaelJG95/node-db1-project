const Accounts = require('./accounts-model')


const checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  if (req.body.name === undefined || req.body.budget === undefined) {
    res.status(400).json({ message: "name and budget are required" })
    return
}
if (req.body.name.trim().length > 100 || req.body.name.trim().length < 3) {
    res.status(400).json({  message: "name of account must be between 3 and 100" })
    return
}
if (isNaN(req.body.budget)) {
    res.status(400).json({ message: "budget of account must be a number" })
    return
}
if (req.body.budget < 0 || req.body.budget > 1000000) {
    res.status(400).json({ message: "budget of account is too large or too small" })
    return
}

req.body.name = req.body.name.trim()
next()
}

const checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getAll()
  .then(accounts => {
    if(accounts.find(a => a.name === req.body.name.trim()) ) {
        // req.existingProject = project
        res.status(400).json({ message: "that name is taken" })
      } else {
        next()
        return
    }
})
.catch(error => next({ error }))
}

const checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.getById(req.params.id)
  .then(account => {
    if(account) {
      req.existingAccount = account
      next()
    } else {
          res.status(404).json({ message: "account not found" })
        }
      })
      .catch(error => next({ error }))
}

module.exports = {
  checkAccountPayload,
  checkAccountNameUnique,
  checkAccountId
}