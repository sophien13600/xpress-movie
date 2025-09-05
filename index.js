import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.urlencoded())// middleware parser


// Mapping entre routes et le routeur
//app.use("/", home)


// Configuration du moteur de template
app.set('view engine', 'ejs')
app.set('views', import.meta.dirname + '/templates')


app.get(['/', '/home', '/accueil'], (req, res) => {

    res.render('index',req.query)    
})

app.all("/*splat", (req, res) => {
    res
        .status(404)
        .end("Page introuvable")
})

const PORT = process.env.PORT || 5555

app.listen(PORT, () => {
    console.log(`Adresse serveur : http://localhost:${PORT}`);
})