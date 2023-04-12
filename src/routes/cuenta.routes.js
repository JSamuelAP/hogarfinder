import { Router } from "express";
import {
	getCliente,
	getNegocio,
	renderEditarCliente,
	renderEditarNegocio,
	renderLogin,
	renderSignup,
	renderSolicituded,
} from "../controllers/cuenta.controller";

const router = Router();

router.get("/login", renderLogin);
router.get("/signup", renderSignup);
router.get("/perfil/:id", getCliente);
router.get("/perfil-negocio/:id", getNegocio);
router.get("/editar-perfil-negocio", renderEditarNegocio);
router.get("/editar-perfil", renderEditarCliente);
router.get("/solicitudes", renderSolicituded);

export default router;
