const router = require('express').Router();
//Importar modelo controlador
const TiposNotificacionController = require('../controllers/TiposNotificacionController');
//Verificar token
const verificarToken = require('./verificarToken')

router.get('/',verificarToken, TiposNotificacionController.list);
router.post('/create', verificarToken, TiposNotificacionController.create);
router.get('/edit/:_id', TiposNotificacionController.edit);
router.put('/update/:_id', TiposNotificacionController.update);
router.delete('/delete/:_id', TiposNotificacionController.delete);

module.exports = router;