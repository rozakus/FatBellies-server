const router = require('express').Router()
const BranchController = require('../controllers/branchController')

router.post('/', BranchController.addBranch)
router.get('/', BranchController.getAllBranch)

module.exports = router