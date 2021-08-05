const router = require('express').Router();
const userRoute = require('./user');
const pqrsdRoute = require('./pqrsd');
const tiposPqrsd = require('./tipospqrsd');

router.use('/user',userRoute);
router.use('/pqrsd',pqrsdRoute);

//Administracion
router.use('/Tipospqrsd',tiposPqrsd);

module.exports = router