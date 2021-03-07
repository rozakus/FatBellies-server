function errorHandlers(err, req, res, next) {
  if (err) {
    let { name, message } = err

    if (name === "SequelizeValidationError" || name === "SequelizeUniqueConstraintError") {
      let message = err.errors.map(error => { return error.message })

      return res.status(400).json({ message: message || 'Bad Request' })
    }

    if (name === 400) {
      return res.status(400).json({ message: message || 'Bad Request' })
    }

    if (name === 404) {
      return res.status(404).json({ message: message || 'Not Found' })
    }
  }

  console.log('>>> check error handler !')
}

module.exports = errorHandlers