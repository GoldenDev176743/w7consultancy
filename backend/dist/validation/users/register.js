"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createUsersSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        "any.required": "Please provide name.",
    }),
    email: joi_1.default.string().email().required().messages({
        "any.required": "Please provide eamil.",
        "string.email": "Pleaes provide a valid email",
    }),
    password: joi_1.default.string().required().messages({
        "any.required": "Please provide email.",
    }),
});
//# sourceMappingURL=register.js.map