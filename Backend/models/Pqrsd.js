const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pqrsdSchema = new Schema(
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
            type: String
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
        },
        f_respuesta:{
            type: String,
        },
        tip_notificacion:{
            type: String,
        },
        emp_transporte:{
            type: String,
        },
        num_guia:{
            type: Number,
        },
        op_respuesta:{
            type: String,
        },
        observaciones:{
            type: String,
        },
        aux_responsable:{
            type: Number,
        },
        doc_respuesta:{
            type: String,
        },
        status:{
            type: String,
        },

        usuario:{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    {
        collection: "pqrsd",
    }

);

module.exports = mongoose.model("Pqrsd", pqrsdSchema);