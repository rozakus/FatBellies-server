const { BranchBuffet, Branch, Buffet } = require('../models')

class BranchBuffetController {
  static async addBranchBuffet(req, res, next) {
    try {
      const { BranchId, BuffetId, day, startTime, endTime } = req.body
      const addBranchBuffet = {
        BranchId: +BranchId,
        BuffetId: +BuffetId,
        day: +day,
        startTime,
        endTime
      }
      console.log(addBranchBuffet)

      const insertBuffet = await BranchBuffet.create(addBranchBuffet)
      const response = {
        id: insertBuffet.id,
        BranchId: insertBuffet.BranchId,
        BuffetId: insertBuffet.BuffetId,
        day: insertBuffet.day,
        startTime: insertBuffet.startTime,
        endTime: insertBuffet.endTime
      }

      return res.status(201).json({ data: response })

    } catch (err) {
      return next(err)
    }
  }

  static async getAllBranchBuffet(req, res, next) {
    try {
      const all = await BranchBuffet.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        include: [{
          model: Branch,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }, {
          model: Buffet,
          attributes: { exclude: ['createdAt', 'updatedAt'] }
        }]
      })

      return res.status(200).json(all)

    } catch (err) {
      return next(err)
    }
  }
}

module.exports = BranchBuffetController