const Joi = require('joi');
const CookContentValidate = (data) => {
    const schema = Joi.object().keys({
        name: Joi.string().required(),
        surname: Joi.string().required(),
        address: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.number().min(5).required(),
        desc: Joi.string().required(),
        facebook: Joi.string().allow('', null),
        instagram: Joi.string().allow('', null),
        youtube: Joi.string().allow('', null),
        referral: Joi.string().allow('', null),
    });
    return schema.validate(data);
};


module.exports = {
    CookContentValidate,
};