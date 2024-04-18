const { envs } = require("./config/env");
const { startServer } = require("./server/server");
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
