const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Ingredient = sequelize.define(
  "Ingredient",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  },
  {
    timstamps: true,
    paranoid: true,
  }
);

module.exports = Ingredient;
