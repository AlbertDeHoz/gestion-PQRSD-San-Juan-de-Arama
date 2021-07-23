const { registroValidacion, loginValidacion, actualizarValidacion } = require("../validate")
const User = require('../models/User')
// encriptador de claves
const bcrypt =require('bcryptjs');
//jsonwebtoken
const jwt = require('jsonwebtoken');
//config secret Key
const config = require('../config')


module.exports = {

    //Controlando la ruta list
    list: async (req,res) =>{
        //TODO
    },

    //Controlando la ruta login

    login: async (req,res) => {
        const {error} = loginValidacion(req.body);
        if(error) res.status(400).send(error.details[0].message);

        //Validar el correo
        const user = await User.findOne({email: req.body.email});
        if(!user) return res.status(400).send('El email no está registrado');

        //Encriptar contraseña
        const validPass = await bcrypt.compare(req.body.password, user.password);
        if(!validPass) return res.status(400).send('Clave incorrecta');

        //crear y asignar token
        const token = jwt.sign({_id: user._id}, config.token_secret);
        res.json({auth: true, token});
    },

    //Controlando la ruta Update

    update: async (req,res) =>{
        //Validaciones
        const {error} = actualizarValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //validar Correo
        const user = await User.findOne({email: req.body.email});
        if(user) return res.status(400).send('El email ya está registrado');

        //Actualizar datos
        const {name, email} = req.body;
        await User.findByIdAndUpdate(req.user._id,{
            name: name,
            email: email
        });
        res.json({mensaje: 'Usuario Actualizado'});
        
    },

    //Controlando la Vista Register

    register: async (req,res) =>{
        //validación
        const {error} = registroValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        
        //Validación de correo existente
        const emailValidate = await User.findOne({email: req.body.email});
        if(emailValidate) return res.status(400).send("Email Registrado");

        //Encriptar clave
        const salt = await bcrypt.genSalt(10);
        const claveHash = await bcrypt.hash(req.body.password, salt);
        //Registrar en la base de datos
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: claveHash,
        })
        // Guardar usuario
        try{
            const userSave = await user.save();
            res.json({mensaje: "Usuario registrado correctamente"})
        }catch(err){
            res.status(400).send(err)
        }

    },
    delete: async (req,res) =>{
        
    }
}