const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dependenciaSchema = new Schema(
    {
        name:{
            type:String
        },
    },
    {
        collection: "dependencia",
    }

);

module.exports = mongoose.model("Dependencia", dependenciaSchema);