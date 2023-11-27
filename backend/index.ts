import * as hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import Inert from "@hapi/inert";

import HapiSwagger from "hapi-swagger";
import HapiAuthJwt2 from "hapi-auth-jwt2";
import fs from "fs";

import config from "./config";
import connectDB from "./lib/dbConnect";
import setRoutes from "./routes";

const validateUser = async (decoded, request, h) => {
  // Perform validation of the decoded JWT token
  // Return an error if validation fails, or return a user object if validation succeeds
  // throw Boom.unauthorized("Invalid credentials");.
  return { isValid: true, userId: decoded.userId };
  // return "OK";
};

const init = async () => {
  await connectDB();
  const server: hapi.Server = new hapi.Server({
    port: 5000,
    routes: { cors: { origin: ["*"] } },
    host: "127.0.0.1"
  });
  await server.register(Inert);
  await server.register(Vision);
  await server.register({
    plugin: HapiSwagger,
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
  await server.register(HapiAuthJwt2);

  await server.auth.strategy("jwt", "jwt", {
    key: config.jwtSecret,
    validate: validateUser,
    verifyOptions: { algorithms: ["HS256"] },
  });

  // server.auth.default("jwt");

  await setRoutes(server);

  await server.start();
  console.log(`🚀 Server running on ${server.info.uri} 🚀`);

  return server;
};

init();

export default init;


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

