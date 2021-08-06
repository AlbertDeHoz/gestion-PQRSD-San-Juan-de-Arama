const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const estadoPqrsdSchema = new Schema(
    {
        name:{
            type:String
        },
    },
    {
        collection: "status",
    }

);

module.exports = mongoose.model("estadoPqrsdSchema", estadoPqrsdSchema);