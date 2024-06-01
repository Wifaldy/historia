import { Mahasiswa } from "./Mahasiswa";
import { MataKuliah } from "./MataKuliah";
import { RencanaStudi } from "./RencanaStudi";

(async () => {
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
