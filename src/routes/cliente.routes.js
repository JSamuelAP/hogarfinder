import { Router } from "express";
import {
	getCliente,
	renderEditarCliente,
} from "../controllers/cliente.controler";

const router = Router();

router.get("/perfil/", getCliente);
router.get("/editar-perfil", renderEditarCliente);

export default router;
