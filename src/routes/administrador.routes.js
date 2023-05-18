import { Router } from "express";
import {
	getSolicitudes,
	getReportes,
	putSolicitud,
} from "../controllers/administrador.controller";

const router = Router();

router.get("/solicitudes", getSolicitudes);
router.get("/reportes", getReportes);
router.put("/solicitudes", putSolicitud);

export default router;
