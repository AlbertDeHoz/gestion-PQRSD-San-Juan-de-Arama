const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tiposPqrsdSchema = new Schema(
    {
        name:{
            type:String
        },
        n_dias:{
            type:Number
        },
    },
    {
        collection: "t_pqrsd",
    }

);

module.exports = mongoose.model("TiposPqrsd", tiposPqrsdSchema);