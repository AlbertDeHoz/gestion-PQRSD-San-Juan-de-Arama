const router = require('express').Router();
//Importar modelo controlador
const UserController = require('../controllers/UserController');
//Importar modelo user
const User = require('../models/User')
//Verificar token
const verificarToken = require('../routes/verificarToken')

router.get('/',UserController.list);
router.post('/login', UserController.login)
router.post('/register', UserController.register);
router.post('/update',verificarToken, UserController.update);
router.delete('/delete/:_id');
router.post('/upload', verificarToken, UserController.upload);
router.get('/userinfo', verificarToken, UserController.userInfo);

module.exports = router;