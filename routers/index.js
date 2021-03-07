const router = require('express').Router()
const branchRouter = require('./branchRouter')
const buffetRouter = require('./buffetRouter')
const branchBuffetRouter = require('./branchBuffetRouter')

router.use('/branch', branchRouter)
router.use('/buffet', buffetRouter)
router.use('/branchBuffet', branchBuffetRouter)

module.exports = router