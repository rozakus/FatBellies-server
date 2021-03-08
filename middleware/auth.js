const { Buffet, Branch } = require('../models')

async function checkBranchId(req, res, next) {
  try {
    const id = +req.params.id || +req.params.BranchId || +req.body.BranchId

    const branchId = await Branch.findByPk(id)

    if (!branchId) {
      console.log(`>>> auth : BranchId ${id} not found`)
      return next({ name: 404, message: `BranchId ${id} not found` })
    }

    if (branchId) {
      console.log(`>>> auth : BranchId ${id} found`)
      req.branch = branchId
      return next()
    }

  } catch (err) {
    return next(err)
  }
}

async function checkBuffetId(req, res, next) {
  try {
    const id = +req.params.id || +req.params.BuffetId || +req.body.BuffetId

    const buffetId = await Buffet.findByPk(id)

    if (!buffetId) {
      console.log(`>>> auth : BuffetId ${id} not found`)
      return next({ name: 404, message: `BuffetId ${id} not found` })
    }

    if (buffetId) {
      console.log(`>>> auth : BuffetId ${id} found`)
      req.buffet = buffetId
      return next()
    }

  } catch (err) {
    return next(err)
  }
}

module.exports = {
  checkBranchId, checkBuffetId
}