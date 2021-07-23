const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let pqrsdSchema = new Schema(
    {
        no_radicado:{
            type:String,
        },
        f_recibido:{
            type: Date,
            default: Date.now,
        },
        t_pqrsd:{
            type: String,
        },
        t_respuesta:{
            type: Number,
        },
        plazo_respuesta:{
            type: Date,
        },
        nombre_solicitante:{
            type: String
        },
        entidad:{
            type:String,
        },
        direccion:{
            type: String,
        },
        correo:{
            type: String,
        },
        telefono:{
            type: String,
        },
        descripcion:{
            type: Text
        },
        mec_recepcion:{
            type: String,
        },
        tramites:{
            type: String,
        },
        dependencia:{
            type:String,
        },
        doc_solicitud:{
            type: String,
        },
        n_of_respuesta:{
            type: String,
            require: false,
        },
        f_respuesta:{
            type: String,
            require: false,
        },
        tip_notificacion:{
            type: String,
            require: false,
        },
        emp_transporte:{
            type: String,
            require: false,
        },
        num_guia:{
            type: Number,
            require: false,
        },
        op_respuesta:{
            type: String,
            require: false,
        },
        observaciones:{
            type: Text,
            require: false,
        },
        aux_responsable:{
            type: Number,
            require: false,
        },
        doc_respuesta:{
            type: String,
        },
        status:{
            type: String,
            require: false,
        },
        usuario:{
            type: Schema.Types.ObjecId,
            ref: 'User',
        }
    },
    {
        collection: "pqrsds",
    }
);

module.exports = mongoose.model("Pqrsd", pqrsdSchema);