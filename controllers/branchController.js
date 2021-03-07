const { Branch, Buffet } = require('../models')

class BranchController {
  static async addBranch(req, res, next) {
    try {
      const { name, latitude, longitude, openHours, closeHours } = req.body

      const newBranch = {
        name,
        latitude,
        longitude,
        openHours,
        closeHours
      }

      const insertBranch = await Branch.create(newBranch)

      return res.status(201).json(insertBranch)

    } catch (err) {
      return next(err)
    }
  }

  static async getAllBranch(req, res, next) {
    try {
      const allBranch = await Branch.findAll({
        order: [['name']],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })

      return res.status(200).json({ data: allBranch })

    } catch (err) {
      return next(err)
    }
  }
}

module.exports = BranchController