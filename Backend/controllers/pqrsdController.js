const Pqrsd = require("../models/Pqrsd");
const User = require('../models/User')
const validatePqrsd = require("../validate/pqrsd.validate");
const { uploadDoc } = require("../handleUploads/uploadFiles");

module.exports = {
  list: async (req, res) => {
    //const pqrsds = await Pqrsd.find();
    const user = await User.findById(req.params).populate('pqrsds')
    console.log(req.params)
    res.send(user)
    // res.status(200).json(pqrsds);
  },
  manage: async (req, res) => {
    const pqrsd = await Pqrsd.findOneAndUpdate(
      { _id:req.params.id },
      req.body,
      { new: true }
    )
    console.log(pqrsd)
    res.status(200).json(pqrsd)
  },
  create: async (req, res) => {
    // const { ...pqrsdData } = req.body;
    // const { error } = validatePqrsd.createPqrsd(pqrsdData);

    // if (error) {
    //   return res.status(400).send(error.details);
    //   console.log(error.details)
    // }
    const pqrsd = new Pqrsd(req.body);
    //Buscar usuario para asignar pqrsd
    const user = await User.findById(req.params);
    //Asignar la pqrsd al usuario
    pqrsd.usuario = user;
    //Se guarda el carro
    await pqrsd.save();
    //Asignar la pqrsd en el usuario
    user.pqrsds.push(pqrsd);
    //Guardar el usuario
    await user.save();
    res.send(pqrsd);
    //return res.status(200).json(pqrsdSaved);
  },

  uploadDocs: async (req, res) => {
    uploadDoc(req, res, async (err) => {
      const url = `${req.protocol}://${req.get('host')}`;
      const { ...pqrsdData } = req.body;
        if (err) {
          res.status(400).send(err);
        }
        const path_doc = `${url}/public/uploads/documents${req.file.filename}`;
        pqrsdData.doc_solicitud = path_doc;
        const pqrsd = new Pqrsd(pqrsdData);
        const pqrsdSaved = await pqrsd.save();
        return res.status(200).json(pqrsdSaved);
      });
  },
};
