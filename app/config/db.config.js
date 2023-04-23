module.exports = {
  HOST: "annamorales.database.windows.net",
  PORT: "1433",
  USER: "mp",
  PASSWORD: "Test12345.",
  SERVER: "annamorales",
  DB: "MinisterioPublico",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
