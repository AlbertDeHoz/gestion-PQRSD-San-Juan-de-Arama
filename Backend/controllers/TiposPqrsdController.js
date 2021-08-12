const TiposPqrsd = require('../models/TiposPqrsd')
const {tiposPqrsdValidacion} = require("../validate/pqrsd.validate");

module.exports = {
    //List
    list: async (req, res, next) => {
        TiposPqrsd.find((error, data) => {
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
        const {error} = tiposPqrsdValidacion(req.body);
        if(error) return res.status(400).send(error.details[0].message);

        //Ingresar en la base de datos
        const tipoPqrsd = new TiposPqrsd({
            name: req.body.name,
            n_dias: req.body.n_dias,
        })
        // Guardar usuario
        try{
            const tipoPqrsdSave = await tipoPqrsd.save();
            res.json({mensaje: "Tipo de PQRSD creada correctamente"})
        }catch(err){
            res.status(400).send(err)
        }
    },
      // Update tipo pqrsd
    update:async (req, res, next) => {
        TiposPqrsd.findByIdAndUpdate(req.params._id, {
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
    TiposPqrsd.findById(req.params._id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  },
  //Delete
    delete: async (req, res, next) => {
    TiposPqrsd.findByIdAndRemove(req.params._id, (error, data) => {
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