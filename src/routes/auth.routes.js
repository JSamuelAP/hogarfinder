import { Router } from "express";
import { uploadPdf } from "../middlewares/multer";
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
router.post(
	"/signup",
	uploadPdf.fields([
		{ name: "ine", maxCount: 1 },
		{ name: "rfc", maxCount: 1 },
		{ name: "comprobante", maxCount: 1 },
	]),
	postCuenta
);
router.get("/logout", cerrarSesion);

export default router;
