const router = require('express').Router();
//Importar modelo controlador
const EmpresasTransportadorasController = require('../controllers/EmpresasTransportadorasController');
//Verificar token
const verificarToken = require('./verificarToken')

router.get('/',verificarToken, EmpresasTransportadorasController.list);
router.post('/create', verificarToken, EmpresasTransportadorasController.create);
router.get('/edit/:_id', EmpresasTransportadorasController.edit);
router.put('/update/:_id', EmpresasTransportadorasController.update);
router.delete('/delete/:_id', EmpresasTransportadorasController.delete);

module.exports = router;