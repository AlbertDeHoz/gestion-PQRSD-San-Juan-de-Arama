const router = require('express').Router();
//Importar modelo controlador
const TramitesController = require('../controllers/TramitesController');
//Verificar token
const verificarToken = require('./verificarToken')

router.get('/',verificarToken, TramitesController.list);
router.post('/create', verificarToken, TramitesController.create);
router.get('/edit/:_id', TramitesController.edit);
router.put('/update/:_id', TramitesController.update);
router.delete('/delete/:_id', TramitesController.delete);

module.exports = router;