const TipoNotificacion = require('../models/TipoNotificacion')
const {tiposNotificacionValidacion} = require("../validate/admin.validate");

module.exports = {
    //List
    list: async (req, res, next) => {
        TipoNotificacion.find((error, data) => {
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
        const {error} = tiposNotificacionValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Ingresar en la base de datos
        const tipoNotificacion = new TipoNotificacion({
            name: req.body.name
        })
        // Guardar usuario
        try{
            const tipoNotificacionSave = await tipoNotificacion.save();
            res.json({mensaje: "Tipo de Notificación creado correctamente"})
        }catch(err){
            res.status(400).send(err)
        }
    },
      // Update tipo pqrsd
    update:async (req, res, next) => {
        TipoNotificacion.findByIdAndUpdate(req.params._id, {
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
    TipoNotificacion.findById(req.params._id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  },
  //Delete
    delete: async (req, res, next) => {
        TipoNotificacion.findByIdAndRemove(req.params._id, (error, data) => {
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