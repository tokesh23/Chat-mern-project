import express from "express";
import { login, signup, logout } from "../controllers/auth_contollers.js"
const router = express.Router();

router.get("/login", login)
router.post("/signup", signup)
router.post("/logout", logout)

export default router;