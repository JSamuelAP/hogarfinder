import { Router } from "express";
import { renderLogin, renderSignup } from "../controllers/auth.controller";

const router = Router();

router.get("/login", renderLogin);
router.get("/signup", renderSignup);

export default router;
