const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rebase_drink_db", "mesmer", "nathanael.1990", {
  host: "db4free.net",
  dialect: "mysql",
});

module.exports = sequelize;
