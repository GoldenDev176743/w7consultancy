import Joi from "joi";

export const createUsersSchema = Joi.object({
    name: Joi.string().required().messages({
        "any.required": "Please provide name.",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Please provide eamil.",
        "string.email": "Pleaes provide a valid email",
    }),
    password: Joi.string().required().messages({
        "any.required": "Please provide email.",
    }),
    job: Joi.string().required().messages({
        "any.required": "Please provide job.",
    })
})