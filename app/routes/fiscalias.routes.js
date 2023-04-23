module.exports = (app) => {
  const fiscalias = require("../controllers/fiscalias.controller.js");

  var router = require("express").Router();

  // Create a new
  router.post("/", fiscalias.create);

  // Consultar todas las fiscalias
  router.get("/", fiscalias.findAll);

  // Consultar fiscalia por ID
  router.get("/:id", fiscalias.findOne);

  // Actualizar fiscalia por id
  router.put("/:id", fiscalias.update);

  // Eliminar fiscalia por ID
  router.delete("/:id", fiscalias.delete);

  app.use("/api/fiscalias", router);
};
