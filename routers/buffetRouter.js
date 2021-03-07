const router = require('express').Router()
const BuffetController = require('../controllers/buffetController')
const { checkBuffetId } = require('../middleware/auth')

router.post('/', BuffetController.addBuffet)
router.get('/', BuffetController.getAllBuffet)
router.get('/:id', checkBuffetId, BuffetController.getBuffetById)
router.patch('/:id', checkBuffetId, BuffetController.updateBuffet)
router.delete('/:id', checkBuffetId, BuffetController.deleteBuffet)

module.exports = router