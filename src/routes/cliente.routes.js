import { Router } from "express";
import { uploadImg } from "../middlewares/multer";
import {
	deleteCliente,
	getCliente,
	getDatosCliente,
	putCliente,
} from "../controllers/cliente.controler";

const router = Router();

router.get("/perfil/", getCliente);
router.get("/editar-perfil", getDatosCliente);
router.post("/editar-perfil", uploadImg.single("foto"), putCliente);
router.delete("/eliminar-cuenta", deleteCliente);

export default router;
