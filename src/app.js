import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";
const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.public_path,
  });
};

// Funcion agnostica auto-convocada
// Es agnostica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los parentesis
(async () => {
  main();
})();
