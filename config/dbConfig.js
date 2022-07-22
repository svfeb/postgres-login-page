module.exports = {
  DB: "testing",
  USER: "postgres",
  PASSWORD: "yag",

  HOST: "localhost",
  dialect: "postgres",
  port: 3699,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
