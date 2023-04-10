import { Router } from "express";
import { getClientes } from "../controllers/cliente.controller";

const router = Router();

// Al entrar a la ruta /clientes, ejecutar getClientes()
router.get("/clientes", getClientes);

export default router;
