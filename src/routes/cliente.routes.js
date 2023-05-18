import { Router } from "express";
import { uploadImg } from "../middlewares/multer";
import {
	getCliente,
	getDatosCliente,
	putCliente,
} from "../controllers/cliente.controler";

const router = Router();

router.get("/perfil/", getCliente);
router.get("/editar-perfil", getDatosCliente);
router.post("/editar-perfil", uploadImg.single("foto"), putCliente);

export default router;
