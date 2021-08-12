const router = require('express').Router();
const pqrsdController = require('../controllers/pqrsdController');

router.get('/:_id/pqrsds',pqrsdController.list);
router.post('/create/:_id',pqrsdController.create);
router.put('/manage/:id',pqrsdController.manage);
router.post('/file', pqrsdController.uploadDocs);

module.exports = router