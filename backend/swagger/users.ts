export const getUsersSwagger = {
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
export const usersRegisterSwagger = {
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
            500: {
                description: "Server error.",
            },
        },
    },
};
export const usersUpdateSwagger = {
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

export const usersLoginSwagger = {
    "hapi-swagger": {
        response: {
            200: {
                description: "Welcome"
            },
            400: {
                description: 'Input Fields Required.'
            },
            409: {
                description: "Welcome"
            },
            500: {
                description: "Welcome"
            },
        }
    }
}