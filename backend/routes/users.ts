import { error } from 'console';
import { Request, ResponseToolkit } from "@hapi/hapi";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import fs from "fs";

import Users from '../models/users'
import config from "../config";
import { createUsersSchema } from "../validation/users/register";
import { usersRegisterSwagger, getUsersSwagger, usersUpdateSwagger, usersLoginSwagger } from "../swagger/users";
import { loginUsersSchema } from '../validation/users/login';


const options = { abortEarly: false, stripUnknown: true };
export let usersRoute = [
    {
        method: "POST",
        path: "/register",
        options: {
            description: "Register Users",
            plugins: usersRegisterSwagger,
            tags: ["api", "users"],
            validate: {
                payload: createUsersSchema,
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
        handler: async (request: Request, response: ResponseToolkit) => {
            try {
                const email = request.payload["email"];
                const users = await Users.findOne({ email });
                if (users) {
                    return response.response([{ message: "Users already exists.", code: 409, color: "error" }]).code(409);
                }

                // get users data from request data
                const newUsersData = {
                    password: request.payload['password'],
                    email: request.payload['email'],
                    name: request.payload['name'],
                    job: request.payload['job']
                }

            console.log(newUsersData);
                const newUsers: any = new Users(newUsersData);

                // save users in db after hashing password
                const { password } = newUsers;
                const hash = await bcrypt.hash(password, 10);
                newUsers.password = hash;
                const usersResult = await newUsers.save();
                const token = Jwt.sign(
                    { userId: usersResult._id, email: usersResult.email, name: usersResult.name, job: usersResult.job, password: usersResult.password },
                    config.jwtSecret,
                    {
                        expiresIn: '3m'
                    }
                );

                return response.response([{ usersResult, message: "Users added successfully", code: 201, color: "success" }]).code(201);
            } catch (error) {
                return response.response(error).code(500);
            }
        }
    },
    {
        method: "GET",
        path: "/getusers",
        options: {
            description: "Get Users",
            plugins: getUsersSwagger,
            tags: ["api", "users"],
        },
        handler: async (request: Request, response: ResponseToolkit) => {
            try {
                const allUsers = await Users.find({});

                if (allUsers.length) {
                    return response.response([{ allUsers, message: "Got users successfully.", code: 200 }]).code(200);
                }
                else {
                    return response.response([{ message: "Active users not found.", code: 404 }]).code(404);
                }
            } catch (error) {
                return response.response(error).code(500);
            }
        }
    },
    {
        method: "PUT",
        path: "/updateusers/{id}",
        options: {
            description: "Update Users",
            plugins: usersRegisterSwagger,
            tags: ["api", "users"],
            validate: {
                payload: createUsersSchema,
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
        handler: async (request: Request, response: ResponseToolkit) => {
            try {
                const users = {
                    name: request.payload['name'],
                    email: request.payload['email'],
                    password: request.payload['password'],
                };

                const updateResult = await Users.findByIdAndUpdate(request.params.id, users, { new: true });
                return response.response([{ updateResult, message: "User has been updated", code: 200 }]).code(200);
            } catch (error) {
                return response.response(error).code(500);
            }
        }
    },
    {
        method: "POST",
        path: "/login",
        options: {
            description: "Login Users",
            plugins: usersLoginSwagger,
            tags: ["api", "users"],
            validate: {
                payload: loginUsersSchema,
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
        handler: async (request: Request, response: ResponseToolkit) => {
            const users = await Users.findOne({ email: request.payload['email'] });
            console.log("email: ", users);

            if (users) {
                const hpass = await bcrypt.compare(
                    request.payload['password'],
                    users.password
                );
                try {
                    if (hpass) {

                        const token = Jwt.sign(
                            { usersId: users._id, email: users.email,name:users.name,job:users.job, usersType: request.payload["type"] },
                            config.jwtSecret,
                            {
                                expiresIn: "1h",
                            }
                        );

                        const info = {
                            email: users.email,
                            name: users.name,
                            job: users.job,
                           
                        }
                        return response.response([{
                            token,
                            info: info,
                            code: 200
                        }]).code(200);
                    } else {
                        return response
                            .response([
                                { message: "Password is incorrect", path: ["password"], code: 401 },
                            ])
                            .code(401);
                    }
                } catch (error) {
                    console.log(error);

                }
            } else {
                return response.response([{
                    message: "Not founded.",
                    path: ["email"], code: 404
                }])
            }
        }
    },

]
