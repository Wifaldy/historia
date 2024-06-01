import { Mahasiswa } from "../db/models/index.js";

export class MahasiswaController {
  static async getAllMahasiswa(req, res) {
    const mahasiswas = await Mahasiswa.findAll();
    res.status(200).json({
      message: "success",
      data: mahasiswas,
    });
  }

  static async getMahasiswaById(req, res) {
    const mahasiswa = await Mahasiswa.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
      data: mahasiswa,
    });
  }

  static async createMahasiswa(req, res) {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json({
      message: "success",
      data: mahasiswa,
    });
  }

  static async updateMahasiswa(req, res) {
    await Mahasiswa.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
    });
  }

  static async deleteMahasiswa(req, res) {
    await Mahasiswa.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
    });
  }
}
