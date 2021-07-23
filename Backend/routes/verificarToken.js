const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function auth(req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Acceso denegado');
    try{
        const verificado = jwt.verify(token, config.token_secret)
        req.user = verificado;
        next()
    }catch(err){
        res.status(400).send('token invalido')
    }
}