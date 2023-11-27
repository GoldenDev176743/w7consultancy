"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersLoginSwagger = exports.usersUpdateSwagger = exports.usersRegisterSwagger = exports.getUsersSwagger = void 0;
exports.getUsersSwagger = {
    "hapi-swagger": {
        responses: {
            200: {
                description: "Got users successfully.",
            },
            404: {
                description: "Active users not found.",
            },
            500: {
                description: "Server error.",
            },
        },
    },
};
exports.usersRegisterSwagger = {
    "hapi-swagger": {
        responses: {
            201: {
                description: "Users created successfully.",
            },
            400: {
                description: "Input Fields Required.",
            },
            409: {
                description: "Users already exists.",
            },
        },
    },
};
exports.usersUpdateSwagger = {
    "hapi-swagger": {
        responses: {
            200: {
                description: "User has been updated.",
            },
            404: {
                description: "Users not found.",
            },
            409: {
                description: "Already updated a User.",
            },
            500: {
                description: "Failed.",
            },
        },
    }
};
exports.usersLoginSwagger = {
    "hapi-swagger": {
        response: {
            200: {
                description: "Welcome"
            }
        }
    }
};
//# sourceMappingURL=users.js.map