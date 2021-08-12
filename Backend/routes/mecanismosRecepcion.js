const router = require('express').Router();
//Importar modelo controlador
const MecanismosRecepcionController = require('../controllers/MecanismosRecepcionController');
//Verificar token
const verificarToken = require('./verificarToken')

router.get('/',verificarToken, MecanismosRecepcionController.list);
router.post('/create', verificarToken, MecanismosRecepcionController.create);
router.get('/edit/:_id', MecanismosRecepcionController.edit);
router.put('/update/:_id', MecanismosRecepcionController.update);
router.delete('/delete/:_id', MecanismosRecepcionController.delete);

module.exports = router;