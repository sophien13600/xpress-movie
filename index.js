import express from "express";
import "dotenv/config";
import connexion from "./routes/connexion.route.js";
import inscription from "./routes/inscription.route.js";

const app = express();

app.use(express.urlencoded());

// Mapping entre routes et le routeur

app.use("/connexion", connexion);
app.get("/connexion", (req, res) => {
  res.render("connexion");
});
app.use("/inscription", inscription);
app.get("/inscription", (req, res) => {
  res.render("inscription");
});

// Configuration du moteur de template
app.set("view engine", "ejs");
app.set("views", import.meta.dirname + "/templates");

app.get(["/", "/home", "/accueil"], (req, res) => {
  res.render("index", req.query);
});

app.all("/*splat", (req, res) => {
  res.status(404).end("Page introuvable");
});

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Adresse serveur : http://localhost:${PORT}`);
});
