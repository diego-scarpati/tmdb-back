require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DATABASE_URL } = process.env;

const db = new Sequelize(DATABASE_URL, null, null, {
  logging: false,
  native: false,
  dialect: "postgres",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

module.exports = db;
