const { Buffet } = require('../models')

class BuffetController {
  static async addBuffet(req, res, next) {
    try {
      const { meal, maxCapacity, price } = req.body
      const newBuffet = {
        meal,
        maxCapacity: +maxCapacity,
        price: +price,
      }

      const insertBuffet = await Buffet.create(newBuffet)
      const response = {
        id: insertBuffet.id,
        meal: insertBuffet.meal,
        maxCapacity: insertBuffet.maxCapacity,
        price: insertBuffet.price
      }

      return res.status(201).json({ data: response })

    } catch (err) {
      return next(err)
    }
  }

  static async getAllBuffet(req, res, next) {
    try {

      const allBuffet = await Buffet.findAll({
        order: [['price']],
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })

      return res.status(200).json({ data: allBuffet })
    } catch (err) {
      return next(err)
    }
  }

  static async getBuffetById(req, res, next) {
    try {
      const { id } = req.params

      const buffetId = await Buffet.findByPk(id, {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      })

      return res.status(200).json({ data: buffetId })

    } catch (err) {
      return next(err)
    }
  }

  static async updateBuffet(req, res, next) {
    try {
      const { id } = req.params
      const { meal, maxCapacity, price } = req.body

      const updateBuffet = await Buffet.update({
        meal,
        maxCapacity: +maxCapacity,
        price: +price
      }, { where: { id: +id } })

      console.log(`BuffetId ${id} is updated, ${updateBuffet}`)

      const response = {
        id: +id,
        meal,
        maxCapacity: +maxCapacity,
        price: +price
      }

      return res.status(200).json({ data: response })

    } catch (err) {
      return next(err)
    }
  }

  static async deleteBuffet(req, res, next) {
    try {
      const { id, meal } = req.buffet
      const deleteBuffet = await Buffet.destroy({ where: { id: +id } })
      console.log(`BuffetId ${id} is deleted, ${deleteBuffet}`)

      return res.status(200).json({ message: `BuffetId ${id}, ${meal} is deleted` })

    } catch (err) {
      return next(err)
    }
  }
}

module.exports = BuffetController