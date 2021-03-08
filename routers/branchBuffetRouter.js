const router = require('express').Router()
const BranchBuffetController = require('../controllers/branchBuffetController')
const { checkBranchId, checkBuffetId, checkBranchBuffetId } = require('../middleware/auth')

router.post('/', checkBranchId, checkBuffetId, BranchBuffetController.addBranchBuffet)
router.get('/', BranchBuffetController.getAllBranchBuffet)
router.get('/:id', checkBranchBuffetId, BranchBuffetController.getBranchBuffetById)
router.delete('/:id', checkBranchBuffetId,BranchBuffetController.deleteBranchBuffetById)

module.exports = router