import express from "express";
import RegisterController from "../controllers/register.controller.js";

const router = express.Router();

router.get("/inscription", RegisterController.add);
export default router;
