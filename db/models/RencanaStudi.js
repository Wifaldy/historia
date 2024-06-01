import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize";
import { Mahasiswa } from "./Mahasiswa";
import { MataKuliah } from "./MataKuliah";

export class RencanaStudi extends Model {}

RencanaStudi.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    mahasiswa_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Mahasiswa,
      },
    },
    matakuliah_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MataKuliah,
      },
    },
    sks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
