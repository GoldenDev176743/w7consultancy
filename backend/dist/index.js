"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const hapi = __importStar(require("@hapi/hapi"));
const vision_1 = __importDefault(require("@hapi/vision"));
const inert_1 = __importDefault(require("@hapi/inert"));
const hapi_swagger_1 = __importDefault(require("hapi-swagger"));
const hapi_auth_jwt2_1 = __importDefault(require("hapi-auth-jwt2"));
const config_1 = __importDefault(require("./config"));
const dbConnect_1 = __importDefault(require("./lib/dbConnect"));
const routes_1 = __importDefault(require("./routes"));
const validateUser = (decoded, request, h) => __awaiter(void 0, void 0, void 0, function* () {
    // Perform validation of the decoded JWT token
    // Return an error if validation fails, or return a user object if validation succeeds
    // throw Boom.unauthorized("Invalid credentials");.
    return { isValid: true, userId: decoded.userId };
    // return "OK";
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, dbConnect_1.default)();
    const server = new hapi.Server({
        port: 5000,
        routes: { cors: { origin: ["*"] } },
        host: "127.0.0.1",
    });
    yield server.register(inert_1.default);
    yield server.register(vision_1.default);
    yield server.register({
        plugin: hapi_swagger_1.default,
        options: {
            info: {
                title: "My API",
                version: "1.0.0",
            },
            securityDefinitions: {
                jwt: {
                    type: "apiKey",
                    name: "Authorization",
                    in: "header",
                },
            },
        },
    });
    yield server.register(hapi_auth_jwt2_1.default);
    yield server.auth.strategy("jwt", "jwt", {
        key: config_1.default.jwtSecret,
        validate: validateUser,
        verifyOptions: { algorithms: ["HS256"] },
    });
    // server.auth.default("jwt");
    yield (0, routes_1.default)(server);
    yield server.start();
    console.log(`🚀 Server running on ${server.info.uri} 🚀`);
    return server;
});
init();
exports.default = init;
// const Hapi = require('@hapi/hapi');
// const Bcrypt = require('bcrypt');
// const CatboxMemory = require('@hapi/catbox-memory');
// const users = {
//   john: {
//     username: 'john',
//     password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
//     name: 'John Doe',
//     id: '2133d32a'
//   }
// };
// const validate = async (request, username, password) => {
//   const user = users[username];
//   if (!user) {
//     return { credentials: null, isValid: false };
//   }
//   const isValid = await Bcrypt.compare(password, user.password);
//   const credentials = { id: user.id, name: user.name};
//   return { isValid, credentials};
// }
// // Admins
// const pastaRecipes = [
//   { id: 1, name: 'Spaghetti Bolognese', password: '123' },
//   { id: 2, name: 'Fettuccine Alfredo', password: '456' },
//   { id: 3, name: 'Penne Arrabiata', password: '789' }
// ];
// const init = async () => {
//   const server = Hapi.server({
//     port: 5000,
//     host: '127.0.0.1' // Remove to only bind to localhost
//   });
//   await server.register(require('@hapi/basic'));
//   server.auth.strategy('simple', 'basic', { validate });
//   //------------------ Get a recipe by ID.--------------
//   server.route({
//     method: 'GET',
//     path: '/recipes/{id}',
//     handler: (request, h) => {
//       const recipeId = parseInt(request.params.id);
//       const recipe = pastaRecipes.find(recipe => recipe.id === recipeId);
//       if (recipe) {
//         return recipe;
//       } else {
//         return h.response({error: 'Recipe not found'}).code(404);
//       }
//     }
//   });
//   server.route({
//     method: 'POST',
//     path: '/recipes',
//     options: {
//       auth: 'simple'
//     },
//     handler: (request, h) => {
//       const recipe = request.payload;
//       recipe.id = pastaRecipes.length + 1;
//       pastaRecipes.push(recipe);
//       return recipe;
//     }
//   });
//   //-----------------Using the cache-----------------------
//   const cache = server.cache({
//     segment: 'recipes',
//     expiresIn: 60 * 60 * 1000, // Cache for 1 hour
//     generateFunc: async (recipeId) => {
//       const recipe = pastaRecipes.find((recipe) => recipe.id === recipeId);
//       return recipe ? { ...recipe, cacheHit: true } : null;
//     },
//     generateTimeout: 2000
//   });
//   server.route({
//     method: 'GET',
//     path: '/recipes',
//     handler: async (request, h) => {
//       const cachedRecipes = await cache.get('all');
//       if (cachedRecipes) {
//         return cachedRecipes;
//       }
//       await cache.set('all', { ...pastaRecipes, cacheHit: true });
//       return pastaRecipes;
//     }
//   })
//   //------------------Using Hapi's server method for caching----------
//   server.method('getRecipe', (id)=>{
//     const recipe = pastaRecipes.find(recipe => recipe.id === id);
//     return recipe ? recipe : { error: 'Recipe not found' };
//   }, {
//     cache: {
//       expiresIn: 10 * 1000,
//       generateTimeout: 2000
//     }
//   });
//   server.route({
//     method: 'GET',
//     path: '/recipes/{id}',
//     handler: async (request, h) => {
//       return await server.methods.getRecipe(parseInt(request.params.id));
//     }
//   });
//   //----------------------------------------
//   await server.start();
//   console.log('Server running at:', server.info.uri);
// };
// init();
//# sourceMappingURL=index.js.map