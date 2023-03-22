const Sequelize = require("sequelize");

const sequelize = new Sequelize("seqeulize-youtube", "root", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
