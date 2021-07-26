const Pqrsd = require('../models/Pqrsd');
const validatePqrsd = require('../validate/pqrsd.validate')

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
        const {error} = validatePqrsd.createPqrsd(pqrsdData);

        if(error){
            return res.status(400).send(error.details);
        }
        const pqrsd = new Pqrsd(pqrsdData);
        const pqrsdSaved = await pqrsd.save();
        return res.status(200).json(pqrsdSaved);
    }
}