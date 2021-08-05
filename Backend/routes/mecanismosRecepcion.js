const router = require('express').Router();
//Importar modelo controlador
const TiposPqrsdController = require('../controllers/TiposPqrsdController');
//Verificar token
const verificarToken = require('./verificarToken')

router.get('/',verificarToken, TiposPqrsdController.list);
router.post('/create', verificarToken, TiposPqrsdController.create);
router.get('/edit/:_id', TiposPqrsdController.edit);
router.put('/update/:_id', TiposPqrsdController.update);
router.delete('/delete/:_id', TiposPqrsdController.delete);

module.exports = router;