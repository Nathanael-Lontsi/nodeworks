const sequelize = require(".");
const Category = require("./category");
const Drink = require("./drinks");
const Glass = require("./glass");
const Ingredients = require("./ingredient");
const User = require("./users");

function relate() {
  sequelize.sync();

  User.hasMany(Drink);
  Drink.belongsTo(User);

  Drink.belongsToMany(Category, { through: "drinks_categories" });
  Category.belongsToMany(Drink, { through: "drinks_categories" });

  Drink.belongsToMany(Ingredients, { through: "drinks_ingredients" });
  Ingredients.belongsToMany(Drink, { through: "drinks_ingredients" });

  Drink.belongsToMany(Glass, { through: "drinks_glasses" });
  Glass.belongsToMany(Drink, { through: "drinks_glasses" });

  sequelize.sync();
}

module.exports = relate;
