const router = require('express').Router();
//Importar modelo controlador
const EstadosPqrsdController = require('../controllers/EstadosPqrsdController');
//Verificar token
const verificarToken = require('./verificarToken')

router.get('/',verificarToken, EstadosPqrsdController.list);
router.post('/create', verificarToken, EstadosPqrsdController.create);
router.get('/edit/:_id', EstadosPqrsdController.edit);
router.put('/update/:_id', EstadosPqrsdController.update);
router.delete('/delete/:_id', EstadosPqrsdController.delete);

module.exports = router;