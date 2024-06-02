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
    const mataKuliah = await MataKuliah.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
      data: mataKuliah,
    });
  };

  static createMataKuliah = async (req, res) => {
    const mataKuliah = await MataKuliah.create(req.body);
    res.status(201).json({
      message: "success",
    });
  };

  static updateMataKuliah = async (req, res) => {
    const mataKuliah = await MataKuliah.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
    });
  };

  static deleteMataKuliah = async (req, res) => {
    const mataKuliah = await MataKuliah.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
    });
  };
}
