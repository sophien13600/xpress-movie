import express from 'express'
import loginController from '../controllers/login.controller.js'

const router = express.Router()


router.get("/", (req, res) => {
  res.render("connexion");
});
router.get('/connexion', loginController.show)

export default router