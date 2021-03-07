const router = require('express').Router()
const branchRouter = require('./branchRouter')
const buffetRouter = require('./buffetRouter')

router.use('/branch', branchRouter)
router.use('/buffet', buffetRouter)

module.exports = router