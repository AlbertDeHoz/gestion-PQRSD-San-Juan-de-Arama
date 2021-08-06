const EmpresaTransportadora = require('../models/EmpresaTransportadora')
const {empresasTransportadorasValidacion} = require("../validate/admin.validate");

module.exports = {
    //List
    list: async (req, res, next) => {
        EmpresaTransportadora.find((error, data) => {
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
        const {error} = empresasTransportadorasValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Ingresar en la base de datos
        const empresaTransportadora = new EmpresaTransportadora({
            name: req.body.name
        })
        // Guardar usuario
        try{
            const tipoNotificacionSave = await empresaTransportadora.save();
            res.json({mensaje: "Tipo de Notificación creado correctamente"})
        }catch(err){
            res.status(400).send(err)
        }
    },
      // Update tipo pqrsd
    update:async (req, res, next) => {
        EmpresaTransportadora.findByIdAndUpdate(req.params._id, {
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
    EmpresaTransportadora.findById(req.params._id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  },
  //Delete
    delete: async (req, res, next) => {
        EmpresaTransportadora.findByIdAndRemove(req.params._id, (error, data) => {
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