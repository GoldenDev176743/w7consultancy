"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoute = void 0;
const users_1 = __importDefault(require("../models/users"));
const register_1 = require("../validation/users/register");
const users_2 = require("../swagger/users");
const options = { abortEarly: false, stripUnknown: true };
exports.usersRoute = [
    {
        method: "POST",
        path: "/register",
        options: {
            description: "Register Users",
            plugins: users_2.usersRegisterSwagger,
            tags: ["api", "users"],
            validate: {
                payload: register_1.createUsersSchema,
                options,
                failAction: (request, h, error) => {
                    const details = error.details.map((d) => {
                        return {
                            message: d.message,
                            path: d.path,
                        };
                    });
                    return h.response(details).code(400).takeover();
                },
            },
        },
        handler: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const email = request.payload["email"];
                const users = yield users_1.default.findOne({ email });
                if (users) {
                    return response.response([{ message: "Users already exists.", code: 409, color: "error" }]).code(409);
                }
                // get users data from request data
                const newUsersData = {
                    name: request.payload['name'],
                    email: request.payload['email'],
                    password: request.payload['password'],
                };
                const newUsers = new users_1.default(newUsersData);
                // save users in db
                const usersResult = yield newUsers.save();
                return response.response([{ usersResult, message: "Users added successfully", code: 201, color: "success" }]).code(201);
            }
            catch (error) {
                return response.response(error).code(500);
            }
        })
    },
    {
        method: "POST",
        path: "/getusers",
        options: {
            description: "Get Users",
            plugins: users_2.getUsersSwagger,
            tags: ["api", "users"],
        },
        handler: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const allUsers = yield users_1.default.find({});
                if (allUsers.length) {
                    return response.response([{ allUsers, message: "Got users successfully.", code: 200 }]).code(200);
                }
                else {
                    return response.response([{ message: "Active users not found.", code: 404 }]).code(404);
                }
            }
            catch (error) {
                return response.response(error).code(500);
            }
        })
    },
    {
        method: "PUT",
        path: "/updateusers/{id}",
        options: {
            description: "Update Users",
            plugins: users_2.usersRegisterSwagger,
            tags: ["api", "users"],
            validate: {
                payload: register_1.createUsersSchema,
                options,
                failAction: (request, h, error) => {
                    const details = error.details.map((d) => {
                        return {
                            message: d.message,
                            path: d.path,
                        };
                    });
                    return h.response(details).code(400).takeover();
                },
            },
        },
        handler: (request, response) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const users = {
                    name: request.payload['name'],
                    email: request.payload['email'],
                    password: request.payload['password'],
                };
                const updateResult = yield users_1.default.findByIdAndUpdate(request.params.id, users, { new: true });
                return response.response([{ updateResult, message: "User has been updated", code: 200 }]).code(200);
            }
            catch (error) {
                return response.response(error).code(500);
            }
        })
    }
];
//# sourceMappingURL=users.js.map