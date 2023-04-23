const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
    define: {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    },
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.fiscalias = require("./fiscalias.model.js")(sequelize, Sequelize);

module.exports = db;