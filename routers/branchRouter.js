const router = require('express').Router()
const BranchController = require('../controllers/branchController')

router.post('/', BranchController.addBranch)
router.get('/', BranchController.getAllBranch)
router.get('/:id', BranchController.getBranchById)
router.patch('/:id', BranchController.updateBranch)
router.delete('/:id', BranchController.deleteBranch)

module.exports = router