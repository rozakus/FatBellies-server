const router = require('express').Router()
const BranchController = require('../controllers/branchController')
const { checkBranchId } = require('../middleware/auth')

router.post('/', BranchController.addBranch)
router.get('/', BranchController.getAllBranch)
router.get('/:id', checkBranchId, BranchController.getBranchById)
router.patch('/:id', checkBranchId, BranchController.updateBranch)
router.delete('/:id', checkBranchId, BranchController.deleteBranch)

module.exports = router