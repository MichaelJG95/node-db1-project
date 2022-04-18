const Accounts = require('./accounts-model')


const checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

const checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
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