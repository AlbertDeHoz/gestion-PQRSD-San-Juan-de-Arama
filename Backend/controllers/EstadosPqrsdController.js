const EstadoPqrsd = require('../models/EstadoPqrsd')
const {estadoPqrsdValidacion} = require("../validate/admin.validate");

module.exports = {
    //List
    list: async (req, res, next) => {
        EstadoPqrsd.find((error, data) => {
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
        const {error} = estadoPqrsdValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Ingresar en la base de datos
        const tipoPqrsd = new EstadoPqrsd({
            name: req.body.name
        })
        // Guardar usuario
        try{
            const tipoPqrsdSave = await tipoPqrsd.save();
            res.json({mensaje: "Tipo de Notificación creado correctamente"})
        }catch(err){
            res.status(400).send(err)
        }
    },
      // Update tipo pqrsd
    update:async (req, res, next) => {
        EstadoPqrsd.findByIdAndUpdate(req.params._id, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Empresa de transporte Actualizada con éxito!')
      }
    })
  },
   edit: async (req, res, next) => {
    EstadoPqrsd.findById(req.params._id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  },
  //Delete
    delete: async (req, res, next) => {
        EstadoPqrsd.findByIdAndRemove(req.params._id, (error, data) => {
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