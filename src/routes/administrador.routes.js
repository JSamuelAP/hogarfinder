import { Router } from "express";
import {
	getSolicitudes,
	getReportes,
} from "../controllers/administrador.controller";

const router = Router();

router.get("/solicitudes", getSolicitudes);
router.get("/reportes", getReportes);

export default router;
