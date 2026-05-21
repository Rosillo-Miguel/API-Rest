import {Router} from "express";
import authController from "./auth.controller.js";

const authRoutes = Router();

authRoutes.get("/", authController.login);

export default authRoutes;