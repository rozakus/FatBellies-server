const router = require('express').Router()
const BranchBuffetController = require('../controllers/branchBuffetController')
const { checkBranchId, checkBuffetId } = require('../middleware/auth')

router.get('/', BranchBuffetController.getAllBranchBuffet)
router.post('/', checkBranchId, checkBuffetId, BranchBuffetController.addBranchBuffet)

module.exports = router