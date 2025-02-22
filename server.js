// Importation des modules nécessaires
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

// Initialisation de l'application Express
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Dossier public pour les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Stockage des positions des appareils
let devicePositions = {};

// Gestion des connexions WebSocket
io.on('connection', (socket) => {
  console.log('Un appareil est connecté');

  // Reçoit la position de l'appareil
  socket.on('updateLocation', (data) => {
    const { deviceId, latitude, longitude } = data;
    devicePositions[deviceId] = { latitude, longitude };

    // Envoie la mise à jour à tous les clients connectés
    io.emit('locationUpdated', devicePositions);
  });

  // Déconnexion de l'appareil
  socket.on('disconnect', () => {
    console.log('Un appareil est déconnecté');
  });
});

// Démarrage du serveur sur le port 3000
server.listen(3000, () => {
  console.log('Serveur en écoute sur http://localhost:3000');
});
