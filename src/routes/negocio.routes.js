import { Router } from "express";
import {
	crearComentario,
	crearReporte,
	getNegocio,
	marcarFavorito,
	quitarFavorito,
	getDatosNegocio,
	renderReportarNegocio,
	putNegocio,
} from "../controllers/negocio.controller";
import { uploadImg } from "../middlewares/multer";

const router = Router();

router.get("/perfil-negocio/:id", getNegocio);
router.get("/perfil-negocio/reportar-negocio", renderReportarNegocio);
router.post("/perfil-negocio/:id", crearComentario);
router.get("/editar-perfil-negocio", getDatosNegocio);
router.post("/editar-perfil-negocio", uploadImg.single("foto"), putNegocio);
router.post("/perfil-negocio/:id/reportar-negocio", crearReporte);
router.post("/perfil-negocio/:id/favorito", marcarFavorito);
router.delete("/perfil-negocio/:id/favorito", quitarFavorito);

export default router;
