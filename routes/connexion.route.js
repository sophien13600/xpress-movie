import express from 'express'
import loginController from '../controllers/login.controller.js'
// ici, on gère les routes relatives  aux personnes
const router = express.Router()

// Mapping entre route et contrôleur


// router.get(['/connexion'], function (req, res)  {
// console.log(req.baseUrl)
//    // res.render('connexion',req.query)    
//    next()
// })

router.get('/connexion', loginController.show)
//   res.render('connexion',connexion)
// })
//router.get('/',connexion)
export default router