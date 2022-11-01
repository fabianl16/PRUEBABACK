const {
    response
} = require('express');
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const usersService = require('../services/user.service');
const service = new usersService();
router.get('/all', (req, res) => {
    const users = service.all();
    res.status(200).json(users);
});
router.post('/create', async (req, res) => {
    const data = req.body;
    const {
        error
    } = schema.validate(data);
    if (error) {
        return res.status(400).json({
            message: error.details[0].message
        });
    }
    try {
        const user = await service.create(data);
        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(409).json({
            message: 'Error al subir la imagen de firma, intentelo más tarde'
        });
    }
});
const schema = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    birthDay: Joi.string()
        .allow(null,'')
        .optional(),
    email: Joi.string()
        .email({
            minDomainSegments: 2
        }),
    phone: Joi.string()
        .alphanum()
        .length(10)
        .required(),
    sign: Joi.string()
        .optional(),
    phoneNumberPrefix: Joi.string()
        .required()
});
module.exports = router;
//Se crean las rutas y sus respuestas 
//Se separaron responsabilidades