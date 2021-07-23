const router = require('express').Router();
const pqrsController = require('../controllers/pqrsController');

router.get('/',pqrsController.list);
router.post('/create',pqrsController.create);
router.put('/update/:id',pqrsController.update);

module.exports = router