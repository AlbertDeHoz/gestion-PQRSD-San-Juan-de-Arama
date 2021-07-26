const router = require('express').Router();
const pqrsdController = require('../controllers/pqrsController');

router.get('/',pqrsdController.list);
router.post('/create',pqrsdController.create);
router.put('/update/:id',pqrsdController.update);

module.exports = router