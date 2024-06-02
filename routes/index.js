import { Router } from "express";
import mahasiswaRouter from "./mahasiswa.route.js";
import rencanaStudiRouter from "./rencana-studi.route.js";
import mataKuliahRouter from "./mata-kuliah.route.js";

const router = Router();

router.use("/mahasiswa", mahasiswaRouter);
router.use("/mata-kuliah", mataKuliahRouter);
router.use("/rencana-studi", rencanaStudiRouter);

export default router;
