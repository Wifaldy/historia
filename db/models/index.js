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
  await Mahasiswa.sync({ alter: false });
  await MataKuliah.sync({ alter: false });
  await RencanaStudi.sync({ alter: false });
  console.log("Finish Synchronization");
})();

Mahasiswa.hasMany(RencanaStudi, { foreignKey: "id_mahasiswa" });
RencanaStudi.belongsTo(Mahasiswa, { foreignKey: "id_mahasiswa" });
MataKuliah.hasMany(RencanaStudi, { foreignKey: "id_matakuliah" });
RencanaStudi.belongsTo(MataKuliah, { foreignKey: "id_matakuliah" });

export { Mahasiswa, MataKuliah, RencanaStudi };
