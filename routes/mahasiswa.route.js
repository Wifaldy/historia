import { Router } from "express";
import MahasiswaController from "../controller/mahasiswa.controller.js";
import {
  createMahasiswa,
  updateMahasiswa,
} from "../validation/mahasiswa.validation.js";

const mahasiswaRouter = Router();

mahasiswaRouter.get("/", MahasiswaController.getAllMahasiswa);
mahasiswaRouter.get("/:id", MahasiswaController.getMahasiswaById);
mahasiswaRouter.post("/", createMahasiswa, MahasiswaController.createMahasiswa);
mahasiswaRouter.put(
  "/:id",
  updateMahasiswa,
  MahasiswaController.updateMahasiswa
);
mahasiswaRouter.delete("/:id", MahasiswaController.deleteMahasiswa);

export default mahasiswaRouter;
