import { Router } from "express";
import mahasiswaRouter from "./mahasiswa.route.js";
const router = Router();

router.use("/mahasiswa", mahasiswaRouter);

export default router;
