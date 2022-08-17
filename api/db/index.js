require("dotenv").config();
const Sequelize = require("sequelize");
const { DATABASE_URL } = process.env;


const db = new Sequelize(DATABASE_URL, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = db;
