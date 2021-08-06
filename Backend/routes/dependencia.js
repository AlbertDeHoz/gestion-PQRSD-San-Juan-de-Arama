const router = require('express').Router();
//Importar modelo controlador
const DependenciaController = require('../controllers/DependenciaController');
//Verificar token
const verificarToken = require('./verificarToken')

router.get('/',verificarToken, DependenciaController.list);
router.post('/create', verificarToken, DependenciaController.create);
router.get('/edit/:_id', DependenciaController.edit);
router.put('/update/:_id', DependenciaController.update);
router.delete('/delete/:_id', DependenciaController.delete);

module.exports = router;