import { Router } from "express";
import { uploadImg } from "../middlewares/multer";
import {
	getServicios,
	getServicio,
	renderFiltros,
	renderCrearPublicacion,
	postPublicacion,
	getServiciosFiltrados,
	getServiciosPorCategoria,
} from "../controllers/servicio.controller";

const router = Router();

// Al entrar a la ruta /clientes, ejecutar getClientes()
router.get("/", getServicios);
router.post("/", getServiciosFiltrados);
router.get("/categoria/:categoria", getServiciosPorCategoria);
router.get("/filtros", renderFiltros);
router.get("/servicio/:id", getServicio);
router.get("/crear-publicacion/", renderCrearPublicacion);
router.post("/crear-publicacion/", uploadImg.single("image"), postPublicacion);

export default router;
