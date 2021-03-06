const { registroValidacion, loginValidacion, actualizarValidacion } = require("../validate/user.validate")
const User = require('../models/User')
// encriptador de claves
const bcrypt =require('bcryptjs');
//jsonwebtoken
const jwt = require('jsonwebtoken');
//config secret Key
const config = require('../config')
//librerias para actualizar imagen
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req,file,cb){
        cb(null, "IMAGE-"+Date.now()+path.extname(file.originalname))
    }
});

const uploadimg = multer({
    storage: storage,
    limis:{fileSize: 1000000},
    fileFilter: (req, file, cb) =>{
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname){
            return cb(null, true)
        }
        cb("Archivo no valido")
    }
}).single("imgPerfil");

module.exports = {

    //Controlando la ruta list
    list: async (req,res, next) =>{
        User.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
          })
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
        const userId = await User.findById(req.params)
        const userIdD = await User.findById(req.user._id)
        try{
            if(toString(userIdD._id) == toString(userId._id)){
                const {name, email} = req.body;
                await User.findByIdAndUpdate(req.user._id,{
                name: name,
                email: email
            });
                res.json({mensaje: 'Usuario Actualizado'});
        }
        }catch (error) {
            return res.status(400).send(`El email que intenta ingresar ya está registrado`);
        }
        //Actualizar datos
        
        
    },

    //Controlando la Vista Register

    register: async (req,res) =>{
        //validación
        const {error} = registroValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        
        //Validación de correo existente
        // const emailValidate = await User.findOne({email: req.body.email});
        // if(emailValidate) return res.status(400).send("Email Registrado");

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
            console.log(err)
            res.status(400).send(err)
        }

    },
    delete: async (req,res,next) =>{
    User.findByIdAndRemove(req.params._id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data
          })
        }
      })
    },
    upload: async (req, res) =>{
        const url = `${req.protocol}://${req.get('host')}`;
        const _id = req.user._id;
        uploadimg(req,res,async function(err){
            if(err){
                return res.end("Error al subir la imagen")
            }
            const rutaimage = `${url}/uploads/${req.file.filename}`;
            await User.findByIdAndUpdate(_id, {
                avatar: rutaimage,
            });
            res.json({mensaje: "Foto Actualizada con éxito"})
        });
    },
    userInfo: async (req,res)=>{
        const user = await User.findById(req.user._id);
        res.send(user);
    }
}