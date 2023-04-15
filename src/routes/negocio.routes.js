import { Router } from "express";
import {
	getNegocio,
	renderEditarNegocio,
	renderReportarNegocio
} from "../controllers/negocio.controller";

const router = Router();

router.get("/perfil-negocio/:id", getNegocio);
router.get("/perfil-negocio/:id/reportar-negocio", renderReportarNegocio);
router.get("/editar-perfil-negocio", renderEditarNegocio);

export default router;
