const router = require('express').Router();
const userRoute = require('./user');
const pqrsdRoute = require('./pqrsd');
const tiposPqrsd = require('./tipospqrsd');
const mecanismosRecepcion = require('./mecanismosRecepcion')
const dependencia = require('./dependencia')

router.use('/user',userRoute);
router.use('/pqrsd',pqrsdRoute);

//Administracion
router.use('/Tipospqrsd',tiposPqrsd);
router.use('/Mecanismos-Recepcion',mecanismosRecepcion);
router.use('/Dependencias',dependencia);

module.exports = router