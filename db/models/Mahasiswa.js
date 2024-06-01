import { DataTypes, Model } from "sequelize";
import { sequelize } from "../sequelize.js";

export class Mahasiswa extends Model {}

Mahasiswa.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    npm: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prodi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "mahasiswa",
    tableName: "mahasiswas",
    timestamps: false,
    underscored: true,
  }
);
