const Pqrsd = require('../models/Pqrsd');
const {createPqrsd} = require('../validate/pqrsd.validate')

module.exports = {
    list: async (req,res) =>{
        const pqrsds = await Pqrsd.find();
        res.status(200).json(pqrsds);
    },
    update:async (req,res) =>{
        //TODO
    },
    create: async (req,res) =>{
         const {...pqrsdData} = req.body;
         const {error} = createPqrsd(req.body);
         if(error) return res.status(400).send(error.details[0].message);

         if(error){
             return res.status(400).send(error.details);
         }
         const pqrsd = new Pqrsd(pqrsdData);
         try{
            const pqrsdSave = await pqrsd.save();
            res.json({mensaje: "pqrsd registrada correctamente"})
            }catch(err){
              res.status(400).send(err)
            }

        //  const {error} = createPqrsd(req.body);
        //  if(error) return res.status(400).send(error.details[0].message);

        // const pqrsd = new Pqrsd({
        //     no_radicado: req.body.no_radicado,
        //     f_recibido: req.body.f_recibido,
        //     t_pqrsd: req.body.t_pqrsd,
        //     plazo_respuesta: req.body.plazo_respuesta,
        //     nombre_solicitante: req.body.nombre_solicitante,
        //     entidad: req.body.entidad,
        //     direccion: req.body.direccion,
        //     correo:req.body.correo,
        //     telefono: req.body.telefono,
        //     descripcion: req.body.descripcion,
        //     mec_recepcion: req.body.mec_recepcion,
        //     tramites: req.body.tramites,
        //     dependencia: req.body.dependencia,
        // })
        // // Guardar usuario
        // try{
        //     const pqrsdSave = await pqrsd.save();
        //     res.json({mensaje: "pqrsd registrada correctamente"})
        // }catch(err){
        //     res.status(400).send(err)
        // }
    }
}