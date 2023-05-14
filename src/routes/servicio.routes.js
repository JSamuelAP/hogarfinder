import { Router } from "express";
import {
	getServicios,
	getServicio,
	renderFiltros,
	renderCrearPublicacion,
	postPublicacion,
	getServiciosFiltrados,
} from "../controllers/servicio.controller";

const router = Router();

// Al entrar a la ruta /clientes, ejecutar getClientes()
router.get("/", getServicios);
router.post("/", getServiciosFiltrados);
router.get("/filtros", renderFiltros);
router.get("/servicio/:id", getServicio);
router.get("/crear-publicacion/", renderCrearPublicacion);
router.post("/crear-publicacion/", postPublicacion);

export default router;
