const router = require('express').Router();
const userRoute = require('./user');
const pqrsdRoute = require('./pqrsd');

router.use('/user',userRoute);
router.use('/pqrsd',pqrsdRoute);

module.exports = router