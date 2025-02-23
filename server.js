// Importation des modules nécessaires
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

// Initialisation de l'application Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware pour analyser le corps des requêtes JSON
const lignes = require('./data/database.json');
app.use(bodyParser.json());
app.use(express.json());

// Dossier public pour les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) =>{
  res.render("index");
});

// Middleware pour gérer les erreurs 404
  app.get("/*", (req, res) => {
  res.render("404");
});

// Démarrage du serveur sur le port 3000
server.listen(3000, () => {
  console.log('Serveur en écoute sur http://localhost:3000');
});