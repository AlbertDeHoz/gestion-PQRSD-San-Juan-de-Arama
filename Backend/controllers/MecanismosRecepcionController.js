const MecanismosRecepcion = require('../models/MecanismosRecepcion')
const {mecanismosRecepcionValidacion} = require("../validate/admin.validate");

module.exports = {
    //List
    list: async (req, res, next) => {
        MecanismosRecepcion.find((error, data) => {
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
        const {error} = mecanismosRecepcionValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Ingresar en la base de datos
        const mecanismosRecepcion = new MecanismosRecepcion({
            name: req.body.name
        })
        // Guardar usuario
        try{
            const tipoPqrsdSave = await mecanismosRecepcion.save();
            res.json({mensaje: "Mecanismo de Recepción creado correctamente"})
        }catch(err){
            res.status(400).send(err)
        }
    },
      // Update tipo pqrsd
    update:async (req, res, next) => {
        MecanismosRecepcion.findByIdAndUpdate(req.params._id, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Tipo de Pqrsd Actualizada con éxito!')
      }
    })
  },
   edit: async (req, res, next) => {
    MecanismosRecepcion.findById(req.params._id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  },
  //Delete
    delete: async (req, res, next) => {
        MecanismosRecepcion.findByIdAndRemove(req.params._id, (error, data) => {
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