import { Router } from "express";
import MahasiswaController from "../controller/mahasiswa.controller.js";

const mahasiswaRouter = Router();

mahasiswaRouter.get("/", MahasiswaController.getAllMahasiswa);
mahasiswaRouter.get("/:id", MahasiswaController.getMahasiswaById);
mahasiswaRouter.post("/", MahasiswaController.createMahasiswa);
mahasiswaRouter.put("/:id", MahasiswaController.updateMahasiswa);
mahasiswaRouter.delete("/:id", MahasiswaController.deleteMahasiswa);

export default mahasiswaRouter;
