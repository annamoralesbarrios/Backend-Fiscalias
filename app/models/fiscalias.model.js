module.exports = (sequelize, Sequelize) => {
  const Fiscalias = sequelize.define("fiscalias", {
    id_fiscalia: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    agencia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    codigo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    datetime: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    departamento: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    municipio: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefono: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return Fiscalias;
};
