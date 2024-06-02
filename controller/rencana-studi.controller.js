import { RencanaStudi } from "../db/models/index.js";

export default class RencanaStudiController {
  static async getAllRencanaStudi(req, res) {
    try {
      const rencanaStudis = await RencanaStudi.findAll();
      res.status(200).json({
        message: "success",
        data: rencanaStudis,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  }

  static async getRencanaStudiById(req, res) {
    try {
      const findById = await RencanaStudi.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Rencana studi tidak ditemukan",
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

  static async createRencanaStudi(req, res) {
    try {
      await RencanaStudiController.validateMahasiswaAndMatakuliah(req, res);
      const rencanaStudi = await RencanaStudi.create(req.body);
      return res.status(201).json({
        message: "success",
        data: rencanaStudi,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        message: error.message || "Internal Server Error",
      });
    }
  }

  static async updateRencanaStudi(req, res) {
    try {
      const findById = await RencanaStudi.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Rencana studi tidak ditemukan",
        });
      }
      await RencanaStudiController.validateMahasiswaAndMatakuliah(req, res);
      await RencanaStudi.update(req.body, {
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

  static async deleteRencanaStudi(req, res) {
    try {
      const findById = await RencanaStudi.findByPk(req.params.id);
      if (!findById) {
        return res.status(404).json({
          message: "Rencana studi tidak ditemukan",
        });
      }
      await RencanaStudi.destroy({
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

  static async validateMahasiswaAndMatakuliah(req, res) {
    const countMahasiswaById = await RencanaStudi.count({
      where: {
        mahasiswaId: req.body.mahasiswaId,
      },
    });
    const countMatakuliahById = await RencanaStudi.count({
      where: {
        matakuliahId: req.body.matakuliahId,
      },
    });
    if (countMahasiswaById >= 3 || countMatakuliahById >= 4) {
      const error = new Error("Jumlah mahasiswa dan matakuliah melebihi batas");
      error.status = 400;
      throw error;
    }
    const duplicateMahasiswaAndMatakuliah = await RencanaStudi.findOne({
      where: {
        mahasiswaId: req.body.mahasiswaId,
        matakuliahId: req.body.matakuliahId,
      },
    });
    if (duplicateMahasiswaAndMatakuliah) {
      const error = new Error("Mahasiswa dan matakuliah sudah terdaftar");
      error.status = 400;
      throw error;
    }
  }
}
