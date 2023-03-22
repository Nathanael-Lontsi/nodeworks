const { DataTypes } = require("sequelize");
const sequelize = require(".");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    emailAddress: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: DataTypes.STRING,
    apiKey: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timstamps: true,
    paranoid: true,
  }
);

module.exports = User;

/* const connection = require(".");

function groupUsersDrinks(rows) {
  const users = {};
  const ids = new Set();
  rows.forEach(({ id, name, ...drink }) => {
    if (user[id]) {
      users[id].drinks.push(drink);
    } else {
      users[id] = { id, name, drinks: [drink] };
    }
    ids.add(id);
  });
  return Array.from(ids).map((id) => users[id]);
}

async function getAllUsers() {
  const [result] = await connection.query(
    "SELECT u.id, u.name, d.id as drink_db, d.name as drink_name from users as u join drinks as d on d.user_id = u.id order by u.id ASC;"
  );
  return groupUsersDrinks(result);
}

async function findUserById(id, limit = 1) {
  const [[user]] = await connection.query(
    `SELECT * from users where id=? LIMIT ?;`,
    [id, limit]
  );
  connection.execute();
  return user;
}

async function insertNewUser(info) {
  const [usser] = await connection.query(
    `INSERT INTO users(name, password, api_key, phone, email) VALUES(?, ?, ?, ?, ?);`,
    [info.name, info.password, info.api_key, info.phone, info.email]
  );
  return usser;
}

async function updateUserId(info, user_id) {
  const [update] = await connection.query(
    `UPDATE users SET name = ?, password = ?, api_key = ?, phone = ?, email = ? WHERE id = ?`,
    [info.name, info.password, info.api_key, info.phone, info.email, user_id]
  );
  return update;
}

async function patchUsers(info, user_id) {
  const [patch] = await connection.query(`UPDATE users SET ? WHERE id = ?`, [
    info,
    user_id,
  ]);
  return patch;
}

async function deleteUsers(user_id) {
  const [deletAll] = await connection.query(`DELETE FROM users WHERE id = ?`, [
    user_id,
  ])
  return deletAll;
}

module.exports = {
  getAllUsers,
  findUserById,
  insertNewUser,
  updateUserId,
  patchUsers,
  deleteUsers,
}; */
