import { RencanaStudi } from "../db/models/index.js";

export default class RencanaStudiController {
  static async getAllRencanaStudi(req, res) {
    const rencanaStudis = await RencanaStudi.findAll();
    res.status(200).json({
      message: "success",
      data: rencanaStudis,
    });
  }

  static async getRencanaStudiById(req, res) {
    const rencanaStudi = await RencanaStudi.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
      data: rencanaStudi,
    });
  }

  static async createRencanaStudi(req, res) {
    const rencanaStudi = await RencanaStudi.create(req.body);
    res.status(201).json({
      message: "success",
      data: rencanaStudi,
    });
  }

  static async updateRencanaStudi(req, res) {
    await RencanaStudi.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
    });
  }

  static async deleteRencanaStudi(req, res) {
    await RencanaStudi.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      message: "success",
    });
  }
}
