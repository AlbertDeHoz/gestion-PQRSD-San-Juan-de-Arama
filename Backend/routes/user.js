const router = require('express').Router();
//Importar modelo controlador
const UserController = require('../controllers/UserController');
//Importar modelo user
const User = require('../models/User')
//Verificar token
const verificarToken = require('../routes/verificarToken')

router.get('/',verificarToken, UserController.list);
router.post('/login', UserController.login)
router.post('/register', UserController.register);
router.post('/update/:_id',verificarToken, UserController.update);
router.delete('/delete/:_id',verificarToken, UserController.delete);
router.post('/upload', verificarToken, UserController.upload);
router.get('/userinfo', verificarToken, UserController.userInfo);

module.exports = router;