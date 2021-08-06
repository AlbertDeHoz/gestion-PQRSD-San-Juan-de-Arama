const router = require('express').Router();
const userRoute = require('./user');
const pqrsdRoute = require('./pqrsd');
const tiposPqrsd = require('./tipospqrsd');
const mecanismosRecepcion = require('./mecanismosRecepcion')
const dependencia = require('./dependencia')
const tiposNotificacion = require("./tiposNotificacion")
const empresasTransportadoras = require("./empresasTransportadoras")

router.use('/user',userRoute);
router.use('/pqrsd',pqrsdRoute);

//Administracion
router.use('/Tipospqrsd',tiposPqrsd);
router.use('/Mecanismos-Recepcion',mecanismosRecepcion);
router.use('/Dependencias',dependencia);
router.use('/Tipos-Notificacion',tiposNotificacion);
router.use('/Empresas-Transportadoras',empresasTransportadoras);

module.exports = router