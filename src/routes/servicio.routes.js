import { Router } from "express";
import { getServicios } from "../controllers/servicio.controller";

const router = Router();

// Al entrar a la ruta /clientes, ejecutar getClientes()
router.get("/", getServicios);

export default router;
