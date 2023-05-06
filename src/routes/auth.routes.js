import { Router } from "express";
import {
	renderLogin,
	renderSignup,
	postCuenta,
	iniciarSesion,
	cerrarSesion,
} from "../controllers/auth.controller";

const router = Router();

router.get("/login", renderLogin);
router.post("/login", iniciarSesion);
router.get("/signup", renderSignup);
router.post("/signup", postCuenta);
router.get("/logout", cerrarSesion);

export default router;
