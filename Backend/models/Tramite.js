const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tramiteSchema = new Schema(
    {
        name:{
            type:String
        },
        codigo:{
            type:Number
        },
    },
    {
        collection: "tramites",
    }

);

module.exports = mongoose.model("Tramite", tramiteSchema);