const Dependencia = require('../models/Dependencia')
const {dependenciasValidacion} = require("../validate/admin.validate");

module.exports = {
    //List
    list: async (req, res, next) => {
        Dependencia.find((error, data) => {
            if (error) {
              return next(error)
            } else {
              res.json(data)
            }
          })
    },
    //Create
    create: async (req, res, next) => {
        //validación
        const {error} = dependenciasValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Ingresar en la base de datos
        const dependencia = new Dependencia({
            name: req.body.name
        })
        // Guardar usuario
        try{
            const dependenciaSave = await dependencia.save();
            res.json({mensaje: "Mecanismo de Recepción creado correctamente"})
        }catch(err){
            res.status(400).send(err)
        }
    },
      // Update tipo pqrsd
    update:async (req, res, next) => {
        Dependencia.findByIdAndUpdate(req.params._id, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Dependencia Actualizada con éxito!')
      }
    })
  },
   edit: async (req, res, next) => {
    Dependencia.findById(req.params._id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  },
  //Delete
    delete: async (req, res, next) => {
        Dependencia.findByIdAndRemove(req.params._id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  }
}