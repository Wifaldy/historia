import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";
import { Mahasiswa } from "./Mahasiswa.js";
import { MataKuliah } from "./MataKuliah.js";

export class RencanaStudi extends Model {}

RencanaStudi.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mahasiswaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Mahasiswa,
      },
    },
    matakuliahId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MataKuliah,
      },
    },
  },
  {
    sequelize,
    modelName: "rencanaStudi",
    tableName: "rencana_studis",
    timestamps: false,
    underscored: true,
  }
);
