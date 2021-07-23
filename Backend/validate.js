const Joi = require('@hapi/joi');
const registroValidacion = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required().messages({
            'string.empty': 'El campo "Nombre" es obligatorio.',
            'string.min': 'El "Nombre" debe ser mayor a {#limit} caracteres',
            'amy.required': `El "Nombre" es Obligatorio`
        }),
        email: Joi.string().min(6).required().email().messages({
            'string.empty': 'El campo "Email" es obligatorio.',
            'string.min': 'El "Email" debe ser mayor a {#limit} caracteres',
            'string.email': `El "Email" no es valido`,
            'amy.required': `El "Email" es Obligatorio`
        }),
        password: Joi.string().min(6).required().messages({
            'string.empty': 'El campo "Contraseña" es obligatorio.',
            'string.min': 'La "Contraseña" debe ser mayor a {#limit} caracteres',
            'amy.required': `La "Contraseña" es Obligatorio`
        })
    })
    return schema.validate(data)
}

const loginValidacion = (data) => {
    const schema = Joi.object({
        email: Joi.string().min(6).required().email().messages({
                'string.empty': 'El campo "Email" es obligatorio.',
                'string.min': 'El "Email" debe ser mayor a {#limit} caracteres',
                'string.email': `El "Email" no es valido`,
                'amy.required': `El "Email" es Obligatorio`
        }),
        password: Joi.string().min(6).required().messages({
            'string.empty': 'El campo "Contraseña" es obligatorio.',
            'string.min': 'La "Contraseña" debe ser mayor a {#limit} caracteres',
            'amy.required': `La "Contraseña" es Obligatorio`
        })
    })
    return schema.validate(data)
}

const actualizarValidacion = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(6).required().messages({
                'string.empty': 'El campo "Nombre" es obligatorio.',
                'string.min': 'El "Nombre" debe ser mayor a {#limit} caracteres',
                'amy.required': `El "Nombre" es Obligatorio`
        }),
        email: Joi.string().min(6).required().email().messages({
            'string.empty': 'El campo "Email" es obligatorio.',
            'string.min': 'El "Email" debe ser mayor a {#limit} caracteres',
            'string.email': `El "Email" no es valido`,
            'amy.required': `El "Email" es Obligatorio`
        }),
    })
    return schema.validate(data)
}

module.exports.registroValidacion = registroValidacion;
module.exports.loginValidacion = loginValidacion;
module.exports.actualizarValidacion = actualizarValidacion;