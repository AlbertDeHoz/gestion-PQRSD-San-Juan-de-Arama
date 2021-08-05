const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mecanismosRecepcionSchema = new Schema(
    {
        name:{
            type:String
        },
    },
    {
        collection: "mec_recepcion",
    }

);

module.exports = mongoose.model("MecanismosRecepcion", mecanismosRecepcionSchema);