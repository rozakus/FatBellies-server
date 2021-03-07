const router = require('express').Router()
const BuffetController = require('../controllers/buffetController')

router.post('/', BuffetController.addBuffet)
router.get('/', BuffetController.getAllBuffet)
router.get('/:id', BuffetController.getBuffetById)
router.patch('/:id', BuffetController.updateBuffet)
router.delete('/:id', BuffetController.deleteBuffet)

module.exports = router