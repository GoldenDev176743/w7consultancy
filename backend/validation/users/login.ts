import Joi from "joi";

export const loginUsersSchema = Joi.object({

    email: Joi.string().email().required().messages({
        "any.required": "Please provide eamil.",
        "string.email": "Pleaes provide a valid email",
    }),
    password: Joi.string().required().messages({
        "any.required": "Please provide email.",
    }),
    
})