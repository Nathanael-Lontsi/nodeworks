const bcrypt = require("bcryptjs/dist/bcrypt");
const { where } = require("sequelize");
const jwt = require("jsonwebtoken");
const { JWT_PRIVATE_KEY } = require("./jwt");
const User = require("./database/users");

// authentication method 1
const Login = async function (email, password) {
  const user = await User.findOne({ where: { emailAddress: email } });
  if (!user) {
    return { status: 401 };
  }

  const result = await bcrypt.compare(password, user.password);
  if (!result) {
    return { status: 500 };
  }

  const token = jwt.sign(
    {
      user_id: user.id,
      email,
    },
    JWT_PRIVATE_KEY,
    {
      expiresIn: "2h",
    }
  );
  return { token, user };
};

// authentication method 2
const loginWithToken = async function (token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    const data = await User.findByPk(decoded.user_id);
    if (!data) return { status: 401 };
    return data;
  } catch (err) {
    return { status: 401 };
  }
};

// authentication method 3
const loginWithApikey = async function (apikey) {
  try {
    const userApi = await User.findOne({ where: { apikey: apikey } });
    if (!userApi) return { status: 401 };
    return userApi;
  } catch (err) {
    return { status: 401 };
  }
};

module.exports = { Login, loginWithToken, loginWithApikey };
