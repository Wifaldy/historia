import { Router } from "express";
import RencanaStudiController from "../controller/rencana-studi.controller.js";

const rencanaStudiRouter = Router();

rencanaStudiRouter.get("/", RencanaStudiController.getAllRencanaStudi);
rencanaStudiRouter.get("/:id", RencanaStudiController.getRencanaStudiById);
rencanaStudiRouter.post("/", RencanaStudiController.createRencanaStudi);
rencanaStudiRouter.put("/:id", RencanaStudiController.updateRencanaStudi);
rencanaStudiRouter.delete("/:id", RencanaStudiController.deleteRencanaStudi);

export default rencanaStudiRouter;
