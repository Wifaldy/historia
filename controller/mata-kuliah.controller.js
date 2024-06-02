import { MataKuliah } from "../db/models/index.js";

export default class MataKuliahController {
  static getAllMataKuliah = async (req, res) => {
    try {
      const mataKuliah = await MataKuliah.findAll();
      res.status(200).json({
        message: "success",
        data: mataKuliah,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static getMataKuliahById = async (req, res) => {
    try {
      const findById = await MataKuliah.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Mata kuliah tidak ditemukan",
        });
      }
      res.status(200).json({
        message: "success",
        data: findById,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  };

  static createMataKuliah = async (req, res) => {
    try {
      const mataKuliah = await MataKuliah.create(req.body);
      res.status(201).json({
        message: "success",
        data: mataKuliah,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  };

  static updateMataKuliah = async (req, res) => {
    try {
      const findById = await MataKuliah.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Mata kuliah tidak ditemukan",
        });
      }
      await MataKuliah.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  };

  static deleteMataKuliah = async (req, res) => {
    try {
      const findById = await MataKuliah.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Mata kuliah tidak ditemukan",
        });
      }
      await MataKuliah.destroy({
        where: { id: req.params.id },
      });
      res.status(200).json({
        message: "success",
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  };
}
