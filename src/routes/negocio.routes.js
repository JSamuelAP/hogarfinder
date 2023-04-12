import { Router } from "express";
import {
	getNegocio,
	renderEditarNegocio,
} from "../controllers/negocio.controller";

const router = Router();

router.get("/perfil-negocio/:id", getNegocio);
router.get("/editar-perfil-negocio", renderEditarNegocio);

export default router;
