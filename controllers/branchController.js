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
        order: [['id']],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })

      return res.status(200).json({ data: allBranch })

    } catch (err) {
      return next(err)
    }
  }

  static async getBranchById(req, res, next) {
    try {
      const { id } = req.params

      const branchId = await Branch.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })

      return res.status(200).json({ data: branchId })

    } catch (err) {
      return next(err)
    }
  }

  static async updateBranch(req, res, next) {
    try {
      const { id } = req.params
      const { name, latitude, longitude, openHours, closeHours } = req.body
      // console.log(req.body)

      const updateBranch = await Branch.update({
        name, latitude, longitude, openHours, closeHours
      }, { where: { id: +id } })

      return res.status(200).json({ data: { id: +id, name, latitude, longitude, openHours, closeHours } })

    } catch (err) {
      return next(err)
    }
  }

  static async deleteBranch(req, res, next) {
    try {
      const { id, name } = req.branch

      const deleteBranch = await Branch.destroy({ where: { id: +id } })
      console.log(`BrandId ${id} is deleted, ${deleteBranch}`)

      return res.status(200).json({ message: `Branch Id ${id} ${name} is deleted` })

    } catch (err) {
      return next(err)
    }
  }
}

module.exports = BranchController