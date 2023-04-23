const { sequelize, Sequelize } = require("../models");

exports.createFiscalia = (fiscalia) => {
  let query = `EXEC crear_fiscalia '${fiscalia.agencia}', '${fiscalia.codigo}',  '${fiscalia.datetime}',  '${fiscalia.departamento}', '${fiscalia.municipio}',  '${fiscalia.telefono}',  '${fiscalia.tipo}';`;

  return sequelize
    .query(query, {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((response) => {
      return { data: response, msg: "Fiscalia creada con exito", valid: true };
    })
    .catch((error) => {
      return { data: error, msg: "Error al crear la fiscalia", valid: false };
    });
};

exports.obtenerFiscalias = () => {
  // Save Fiscalia en la base de datos
  let query = `EXEC obtener_fiscalias;`;

  return sequelize
    .query(query, {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((response) => {
      return {
        data: response,
        msg: "Se han listado las fiscalias",
        valid: true,
      };
    })
    .catch((error) => {
      return { data: error, msg: "Error al obtener fiscalias", valid: false };
    });
};

exports.obtenerFiscalia = (fiscalia) => {
  let query = `EXEC obtener_fiscalia ${fiscalia.id_fiscalia};`;

  return sequelize
    .query(query, {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((response) => {
      return {
        data: response,
        msg: `Se ha listado la fiscalia ${fiscalia.id_fiscalia} correctamente`,
        valid: true,
      };
    })
    .catch((error) => {
      return {
        data: error,
        msg: `Error al listar la fiscalia ${fiscalia.id_fiscalia}`,
        valid: false,
      };
    });
};

exports.actualizarFiscalia = (fiscalia) => {

  let query = `EXEC actualizar_fiscalia ${fiscalia.id_fiscalia}, '${fiscalia.agencia}', '${fiscalia.codigo}',  '${fiscalia.datetime}',  '${fiscalia.departamento}', '${fiscalia.municipio}',  '${fiscalia.telefono}',  '${fiscalia.tipo}';`;

  return sequelize
    .query(query, {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((response) => {
      return {
        data: response,
        msg: `Se ha actualizado la fiscalia ${fiscalia.id_fiscalia} correctamente`,
        valid: true,
      };
    })
    .catch((error) => {
      return {
        data: error,
        msg: `Error al actualizar la fiscalia ${fiscalia.id_fiscalia}`,
        valid: false,
      };
    });
};


exports.eliminarFiscalia = (fiscalia) => {
  let query = `EXEC eliminar_fiscalia ${fiscalia.id_fiscalia};`;

  return sequelize
    .query(query, {
      type: Sequelize.QueryTypes.SELECT,
    })
    .then((response) => {
      return {
        data: response,
        msg: `Se ha eliminado la fiscalia ${fiscalia.id_fiscalia} correctamente`,
        valid: true,
      };
    })
    .catch((error) => {
      return {
        data: error,
        msg: `Error al eliminar la fiscalia ${fiscalia.id_fiscalia}`,
        valid: false,
      };
    });
};