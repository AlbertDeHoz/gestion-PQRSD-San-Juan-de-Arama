const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipoNotificacionSchema = new Schema(
    {
        name:{
            type:String
        },
    },
    {
        collection: "tip_notificacion",
    }

);

module.exports = mongoose.model("TipoNotificacion", tipoNotificacionSchema);