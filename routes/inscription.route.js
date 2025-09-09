import express from "express";
import RegisterController from "../controllers/register.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("inscription");
});
router.get("/inscription", RegisterController.add);
export default router;
