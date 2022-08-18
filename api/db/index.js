require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DATABASE_URL, USER, PASSWORD } = process.env;

const db = new Sequelize(DATABASE_URL, {
  logging: false,
  native: false,
  dialect: "postgres",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = db;
