const Joi = require('@hapi/joi');

const createPqrsd = (data) => {
    const joiSchema = Joi.object({
        no_radicado: Joi.date().min(10).required(),
        //f_recibido: no esta porque debe generarse automaticamente
        t_pqrsd: Joi.string().required(),
        //t_respuesta: debe generarse automaticamente
        plazo_respuesta:Joi.date().required(),
        nombre_solicitante:Joi.string().required(),
        entidad:Joi.string().required(),
        direccion: Joi.string().required(),
        correo:Joi.string().email().optional(),
        telefono: Joi.string().required(),
        descripcion: Joi.string().optional(),
        mec_recepcion: Joi.string().required(),
        tramites: Joi.string().required(),
        dependencia: Joi.string().required(),
        doc_solicitud: Joi.string().optional(),
        n_of_respuesta: Joi.string().optional(),
        f_respuesta: Joi.string().optional(),
        tip_notificacion: Joi.string().optional(),
        emp_transporte: Joi.string().optional(),
        num_guia: Joi.string().optional(),
        op_respuesta: Joi.string().optional(),
        observaciones: Joi.string().optional(),
        aux_responsable: Joi.number().optional(),
        doc_respuesta: Joi.string().optional(),
        status:Joi.string().optional()

    })
    return joiSchema.validate(data);
}

module.exports = {createPqrsd}