const Tramite = require('../models/Tramite')
const {tramitesValidacion} = require("../validate/admin.validate");

module.exports = {
    //List
    list: async (req, res, next) => {
        Tramite.find((error, data) => {
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
        const {error} = tramitesValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Ingresar en la base de datos
        const tramite = new Tramite({
            name: req.body.name,
            codigo: req.body.codigo,
        })
        // Guardar usuario
        try{
            const tramiteSave = await tramite.save();
            res.json({mensaje: "Tramite creado correctamente"})
        }catch(err){
            res.status(400).send(err)
        }
    },
      // Update tipo pqrsd
    update:async (req, res, next) => {
        Tramite.findByIdAndUpdate(req.params._id, {
        $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Tramite Actualizada con éxito!')
      }
    })
  },
   edit: async (req, res, next) => {
    Tramite.findById(req.params._id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  },
  //Delete
    delete: async (req, res, next) => {
        Tramite.findByIdAndRemove(req.params._id, (error, data) => {
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