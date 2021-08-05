const router = require('express').Router();
//Importar modelo controlador
const TiposPqrsdController = require('../controllers/TiposPqrsdController');
//Importar modelo user
const TiposPqrsd = require('../models/TiposPqrsd')
//Verificar token
const verificarToken = require('../routes/verificarToken')

router.get('/',verificarToken, TiposPqrsdController.list);
router.post('/create', verificarToken, TiposPqrsdController.create);
router.get('/edit/:_id', TiposPqrsdController.edit);
router.put('/update/:_id', TiposPqrsdController.update);
router.delete('/delete/:_id', TiposPqrsdController.delete);

module.exports = router;