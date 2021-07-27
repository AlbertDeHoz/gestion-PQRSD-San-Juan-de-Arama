const router = require('express').Router();
const pqrsdController = require('../controllers/pqrsdController');

router.get('/',pqrsdController.list);
router.post('/create',pqrsdController.create);
router.put('/update/:id',pqrsdController.update);
router.post('/file', pqrsdController.uploadDocs);

module.exports = router