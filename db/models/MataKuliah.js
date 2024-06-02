import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

export class MataKuliah extends Model {}

MataKuliah.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    kode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
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
    modelName: "mataKuliah",
    tableName: "mata_kuliahs",
    timestamps: false,
    underscored: true,
  }
);
