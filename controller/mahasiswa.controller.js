import { Op } from "sequelize";
import { Mahasiswa } from "../db/models/index.js";
import { param, validationResult } from "express-validator";

export default class MahasiswaController {
  static async getAllMahasiswa(req, res) {
    try {
      const mahasiswas = await Mahasiswa.findAll();
      res.status(200).json({
        message: "success",
        data: mahasiswas,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  }

  static async getMahasiswaById(req, res) {
    try {
      const findById = await Mahasiswa.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Mahasiswa tidak ditemukan",
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
  }

  static async createMahasiswa(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const findMahasiswaByNIMorEmail = await Mahasiswa.findOne({
        where: {
          [Op.or]: {
            nim: req.body.nim,
            email: req.body.email,
          },
        },
      });
      if (findMahasiswaByNIMorEmail) {
        return res.status(400).json({
          message: "NIM atau Email sudah terdaftar",
        });
      }
      const mahasiswa = await Mahasiswa.create(req.body);
      res.status(201).json({
        message: "success",
        data: mahasiswa,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  }

  static async updateMahasiswa(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const findById = await Mahasiswa.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Mahasiswa tidak ditemukan",
        });
      }
      const findMahasiswaByNIMorEmail = await Mahasiswa.findOne({
        where: {
          [Op.or]: {
            nim: req.body.nim,
            email: req.body.email,
          },
          id: { [Op.ne]: req.params.id },
        },
      });
      if (findMahasiswaByNIMorEmail) {
        return res.status(400).json({
          message: "NIM atau Email sudah terdaftar",
        });
      }
      await Mahasiswa.update(req.body, {
        where: { id: req.params.id },
      });
      res.status(200).json({
        message: "success",
      });
    } catch (err) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  }

  static async deleteMahasiswa(req, res) {
    try {
      const findById = await Mahasiswa.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Mahasiswa tidak ditemukan",
        });
      }
      await Mahasiswa.destroy({
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
  }
}
