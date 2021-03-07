const { BranchBuffet } = require('../models')

class BranchBuffetController {
  static async addBranchBuffet(req, res, next) {
    try {
      const { BranchId, BuffetId, day, startTime, endTime } = req.body

      return res.status(201).json({ data: req.body })

    } catch (err) {
      return next(err)
    }
  }
}

module.exports = BranchBuffetController