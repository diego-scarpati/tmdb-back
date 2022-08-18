require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DATABASE_URL, USER, PASSWORD } = process.env;

const db = new Sequelize(DATABASE_URL, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false, // averiguar
    },
  },
});

module.exports = db;
