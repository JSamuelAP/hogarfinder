import { Router } from "express";
import {
	crearComentario,
	crearReporte,
	getNegocio,
	marcarFavorito,
	quitarFavorito,
	renderEditarNegocio,
	renderReportarNegocio,
} from "../controllers/negocio.controller";

const router = Router();

router.get("/perfil-negocio/:id", getNegocio);
router.get("/perfil-negocio/:id/reportar-negocio", renderReportarNegocio);
router.post("/perfil-negocio/:id", crearComentario);
router.get("/editar-perfil-negocio", renderEditarNegocio);
router.post("/perfil-negocio/:id/reportar-negocio", crearReporte);
router.post("/perfil-negocio/:id/favorito", marcarFavorito);
router.delete("/perfil-negocio/:id/favorito", quitarFavorito);

export default router;
