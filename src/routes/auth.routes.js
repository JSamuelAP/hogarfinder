import { Router } from "express";
import {
	renderLogin,
	renderSignup,
	postCuenta,
} from "../controllers/auth.controller";

const router = Router();

router.get("/login", renderLogin);
router.get("/signup", renderSignup);
router.post("/signup", postCuenta);

export default router;
