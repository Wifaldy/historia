import { Mahasiswa } from "./Mahasiswa.js";
import { MataKuliah } from "./MataKuliah.js";
import { RencanaStudi } from "./RencanaStudi.js";
import { DB_CONFIG } from "../../libs/utils.js";
import mysql from "mysql2/promise.js";

(async () => {
  const { db_host, db_name, db_user, db_password } = DB_CONFIG;
  console.log("Create database if not exist");
  const connection = await mysql.createConnection({
    host: db_host,
    user: db_user,
    password: db_password,
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${db_name}`);
  await connection.end();
  console.log("Start Synchronization ");
  await Mahasiswa.sync({ alter: true });
  await MataKuliah.sync({ alter: true });
  await RencanaStudi.sync({ alter: true });
  console.log("Finish Synchronization");
})();

Mahasiswa.hasMany(RencanaStudi, { foreignKey: "mahasiswa_id" });
RencanaStudi.belongsTo(Mahasiswa, { foreignKey: "mahasiswa_id" });
MataKuliah.hasMany(RencanaStudi, { foreignKey: "matakuliah_id" });
RencanaStudi.belongsTo(MataKuliah, { foreignKey: "matakuliah_id" });

export { Mahasiswa, MataKuliah, RencanaStudi };
