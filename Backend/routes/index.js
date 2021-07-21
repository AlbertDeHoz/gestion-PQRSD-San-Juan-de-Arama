const router = require('express').Router();
const pqrsd = require('./pqrsd');

router.use('/pqrsd',pqrsd);


module.exports = router;