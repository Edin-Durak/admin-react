const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "admin_dashboard",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "Allahovrob10",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: console.log,
    dialectOptions: {
      charset: "utf8mb4",
    },
  }
);

module.exports = sequelize;
