import { Router } from "express";
import MataKuliahController from "../controller/mata-kuliah.controller.js";

const mataKuliahRouter = Router();

mataKuliahRouter.get("/", MataKuliahController.getAllMataKuliah);
mataKuliahRouter.get("/:id", MataKuliahController.getMataKuliahById);
mataKuliahRouter.post("/", MataKuliahController.createMataKuliah);
mataKuliahRouter.put("/:id", MataKuliahController.updateMataKuliah);
mataKuliahRouter.delete("/:id", MataKuliahController.deleteMataKuliah);

export default mataKuliahRouter;
