const router = require('express').Router();
//Importar modelo controlador
const UserController = require('../controllers/UserController');
//Importar modelo user
const User = require('../models/User')
//Verificar token
const verificarToken = require('../routes/verificarToken')


const {registroValidacion, loginValidacion} = require('../validate');

router.get('/',UserController.list);
router.post('/login', UserController.login)
router.post('/register', UserController.register);
router.put('/update/:_id',verificarToken, UserController.update);
router.delete('/delete/:_id');
router.post('/upload', verificarToken, UserController.upload);

module.exports = router;