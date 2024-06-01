import { DB_CONFIG } from "../libs/utils.js";
import { Sequelize } from "sequelize";

const { db_host, db_name, db_user, db_password } = DB_CONFIG;
const sequelize = new Sequelize(db_name, db_user, db_password, {
  host: db_host,
  dialect: DB_CONFIG.config.dialect,
  port: DB_CONFIG.config.port,
  logging: false,
});

export { Sequelize, sequelize };
