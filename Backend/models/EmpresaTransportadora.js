const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const empresasTransportadorasSchema = new Schema(
    {
        name:{
            type:String
        },
    },
    {
        collection: "emp_transporte",
    }

);

module.exports = mongoose.model("EmpresaTransportadora", empresasTransportadorasSchema);