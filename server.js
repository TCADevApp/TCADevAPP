// Importation des modules nécessaires
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');
//const { body, validationResult } = require("express-validator");

// Initialisation de l'application Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware pour analyser le corps des requêtes JSON
const lignes = require('./data/database.json');
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) =>{
  res.render("index");
});

app.get("/lignes", (req, res) => {
  res.render("lignes", { lignes });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/*", (req, res, next) => {
  res.render("404");
});

// Démarrage du serveur sur le port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});