const {
  createFiscalia,
  obtenerFiscalias,
  obtenerFiscalia,
  actualizarFiscalia,
  eliminarFiscalia,
} = require("../services/fiscalias.services");

// Crear y guardar nueva fiscalia
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Crear fiscalia
    const fiscalia = {
      agencia: req.body.agencia,
      codigo: req.body.codigo,
      datetime: req.body.datetime,
      departamento: req.body.departamento,
      municipio: req.body.municipio,
      telefono: req.body.telefono,
      tipo: req.body.tipo,
    };

    const create = await createFiscalia(fiscalia);

    if (!create.valid) return res.status(500).send(fiscalia);

    return res.status(201).send({ create });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

// Consultar todas las fiscalias

exports.findAll = async (req, res) => {
  try {
    const fiscalias = await obtenerFiscalias();

    if (!fiscalias.valid) return res.status(500).send(fiscalias);

    return res.status(201).send({ fiscalias });
  } catch (error) {
    return res.status(400).send({ error });
  }
};
// Consultar fiscalia por ID
exports.findOne = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Crear fiscalia

    const fiscalia = await obtenerFiscalia({
      id_fiscalia: id,
    });

    if (!fiscalia.valid) return res.status(500).send(fiscalia);

    return res.status(201).send({ fiscalia });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

// Editar fiscalia por ID
exports.update = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }
    // Crear fiscalia
    const fiscalia = {
      id_fiscalia: id,
      agencia: req.body.agencia,
      codigo: req.body.codigo,
      datetime: req.body.datetime,
      departamento: req.body.departamento,
      municipio: req.body.municipio,
      telefono: req.body.telefono,
      tipo: req.body.tipo,
    };

    const update = await actualizarFiscalia(fiscalia);

    if (!update.valid) return res.status(500).send(update);

    return res.status(201).send({ update });
  } catch (error) {
    return res.status(400).send({ error });
  }
};
// Eliminar fiscalia por ID
exports.delete = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const update = await eliminarFiscalia({ id_fiscalia: id });

    if (!update.valid) return res.status(500).send(update);

    return res.status(201).send({ update });
  } catch (error) {
    return res.status(400).send({ error });
  }
};
