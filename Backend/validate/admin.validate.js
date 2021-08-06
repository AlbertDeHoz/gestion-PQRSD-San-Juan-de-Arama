const Joi = require('@hapi/joi');

const mecanismosRecepcionValidacion = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': 'El campo "Nombre" es obligatorio.',
            'amy.required': `El "Nombre" es Obligatorio`
        })
    })
    return schema.validate(data)
}

const dependenciasValidacion = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': 'El campo "Nombre" es obligatorio.',
            'amy.required': `El "Nombre" es Obligatorio`
        })
    })
    return schema.validate(data)
}

const tiposNotificacionValidacion = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': 'El campo "Nombre" es obligatorio.',
            'amy.required': `El "Nombre" es Obligatorio`
        })
    })
    return schema.validate(data)
}

const empresasTransportadorasValidacion = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': 'El campo "Nombre" es obligatorio.',
            'amy.required': `El "Nombre" es Obligatorio`
        })
    })
    return schema.validate(data)
}

const estadoPqrsdValidacion = (data) => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': 'El campo "Nombre" es obligatorio.',
            'amy.required': `El "Nombre" es Obligatorio`
        })
    })
    return schema.validate(data)
}

module.exports.mecanismosRecepcionValidacion = mecanismosRecepcionValidacion;
module.exports.dependenciasValidacion = dependenciasValidacion;
module.exports.tiposNotificacionValidacion = tiposNotificacionValidacion;
module.exports.empresasTransportadorasValidacion = empresasTransportadorasValidacion;
module.exports.estadoPqrsdValidacion = estadoPqrsdValidacion;