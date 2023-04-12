import { Router } from "express";
import {
	getServicios,
	getServicio,
	renderFiltros,
	renderCrearPublicacion,
} from "../controllers/servicio.controller";

const router = Router();

// Al entrar a la ruta /clientes, ejecutar getClientes()
router.get("/", getServicios);
router.get("/filtros", renderFiltros);
router.get("/servicio/:id", getServicio);
router.get("/crear-publicacion/", renderCrearPublicacion);

export default router;
