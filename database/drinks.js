const { DataTypes } = require("sequelize");
const sequelize = require(".");

const Drink = sequelize.define(
  "Drink",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    recipe: DataTypes.STRING,
    isAlcoholic: DataTypes.BOOLEAN,
    categoryId: DataTypes.INTEGER,
    glassId: DataTypes.INTEGER,
    ingredientId: DataTypes.INTEGER
  },
  {
    timstamps: true,
    paranoid: true,
  }
);

module.exports = Drink;
