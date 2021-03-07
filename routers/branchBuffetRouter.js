const router = require('express').Router()
const BranchBuffetController = require('../controllers/branchBuffetController')

router.post('/', BranchBuffetController.addBranchBuffet)

module.exports = router