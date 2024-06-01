import dotenv from "dotenv";

const NODE_ENV = process.env.NODE_ENV || "local";
dotenv.config({
  path: `../.env.${NODE_ENV}`,
  override: true,
});

const DB_CONFIG = {
  db_host: process.env["DB_HOST"] || "localhost",
  db_name: process.env["DB_NAME"] || "db_local",
  db_user: process.env["DB_USER"] || "root",
  db_password: process.env["DB_PASSWORD"] || "root",
  config: {
    dialect: process.env["DB_DIALECT"] || "mysql",
    port: process.env["DB_PORT"] || "3306",
  },
};

export { DB_CONFIG, NODE_ENV };
