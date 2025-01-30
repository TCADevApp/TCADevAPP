// Gestion du menu burger
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Gestion du logo pour retour à l'accueil
const logo = document.querySelector('.header__logo');

logo.addEventListener('click', () => {
  window.location.href = 'index.html';
});

// Base de données des lignes de transport
const lignesDeTransport = [
  {
    id: "Ligne 01",
    nom: "Commerce - Kingasani",
    distance: "18 km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Commerce", lien: "" },
      { nom: "Kingasani", lien: "" },
    ],
  },
  {
    id: "Ligne 02",
    nom: "Royal - Masina Sans Fil",
    distance: "12 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Royal", lien: "" },
      { nom: "Masina Sans Fil", lien: "" },
    ],
  },
  {
    id: "Ligne 03",
    nom: "Gare Central - Ngiri Ngiri",
    distance: "15 Km",
    busActifs: "Bus Actif 03",
    arrets: [
      { nom: "Gare Central", lien: "" },
      { nom: "Ngiri Ngiri", lien: "" },
    ],
  },
  {
    id: "Ligne 04",
    nom: "UPN - Gare Central",
    distance: "12 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "UPN", lien: "" },
      { nom: "Gare Central", lien: "" },
    ],
  },
  {
    id: "Ligne 05",
    nom: "Ngiri-Ngiri - Gare Centrale",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Ngiri-Ngiri", lien: "" },
      { nom: "Gare Centrale", lien: "" },
    ],
  },
  {
    id: "Ligne 06",
    nom: "Petro Congo - Zando",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Petro Congo", lien: "" },
      { nom: "Zando", lien: "" },
    ],
  },
  {
    id: "Ligne 07",
    nom: "HRGK (Mama Yemo) - Mbudi",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "HRGK (Mama Yemo)", lien: "" },
      { nom: "Mbudi", lien: "" },
    ],
  },
  {
    id: "Ligne 08",
    nom: "Intendance - Zando",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Intendance", lien: "" },
      { nom: "Zando", lien: "" },
    ],
  },
  {
    id: "Ligne 09",
    nom: "UPN - Victoire",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "UPN", lien: "" },
      { nom: "Victoire", lien: "" },
    ],
  },
  {
    id: "Ligne 10",
    nom: "Gare Centrale - UPN",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Gare Centrale", lien: "" },
      { nom: "UPN", lien: "" },
    ],
  },
  {
    id: "Ligne 11",
    nom: "Debon-Homme - Kinkole",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Debon-Homme", lien: "" },
      { nom: "Kinkole", lien: "" },
    ],
  },
  {
    id: "Ligne 12",
    nom: "UPN - Matete (Marché)",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "UPN", lien: "" },
      { nom: "Matete (Marché)", lien: "" },
    ],
  },
  {
    id: "Ligne 13",
    nom: "Victoire - UPN",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Victoire", lien: "" },
      { nom: "UPN", lien: "" },
    ],
  },
  {
    id: "Ligne 14",
    nom: "Selembao - Zando",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Selembao", lien: "" },
      { nom: "Zando", lien: "" },
    ],
  },
  {
    id: "Ligne 15",
    nom: "UPN - Mitendi",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "UPN", lien: "" },
      { nom: "Mitendi", lien: "" },
    ],
  },
  {
    id: "Ligne 16",
    nom: "Mbudi - HRGK (Mama Yemo)",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Mbudi", lien: "" },
      { nom: "HRGK (Mama Yemo)", lien: "" },
    ],
  },
  {
    id: "Ligne 17",
    nom: "UPN - Campus Trafic",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "UPN", lien: "" },
      { nom: "Campus Trafic", lien: "" },
    ],
  },
  {
    id: "Ligne 18",
    nom: "Zando - Matete (Marché)",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Zando", lien: "" },
      { nom: "Matete (Marché)", lien: "" },
    ],
  },
  {
    id: "Ligne 19",
    nom: "Gare Centrale - Ngiri-Ngiri",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Gare Centrale", lien: "" },
      { nom: "Ngiri-Ngiri", lien: "" },
    ],
  },
  {
    id: "Ligne 20",
    nom: "Rond Point Ngaba - Place des évolués",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Rond Point Ngaba", lien: "" },
      { nom: "Place des évolués", lien: "" },
    ],
  },
  {
    id: "Ligne 21",
    nom: "Bandal Tshibangu - Onatra",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Bandal Tshibangu", lien: "" },
      { nom: "Onatra", lien: "" },
    ],
  },
  {
    id: "Ligne 22",
    nom: "Zando - Kimbanseke (Cimetière)",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Zando", lien: "" },
      { nom: "Kimbanseke (Cimetière)", lien: "" },
    ],
  },
  {
    id: "Ligne 23",
    nom: "Fonction Publique - Pascal",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Fonction Publique", lien: "" },
      { nom: "Pascal", lien: "" },
    ],
  },
  {
    id: "Ligne 24",
    nom: "Gambela - Mbudi",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Gambela", lien: "" },
      { nom: "Mbudi", lien: "" },
    ],
  },
  {
    id: "Ligne 25",
    nom: "Kinsuka - Gare Centrale",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Gare Centrale", lien: "" },
    ],
  },
  {
    id: "Ligne 26",
    nom: "Matete - Gare Centrale",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Matete", lien: "" },
      { nom: "Gare Centrale", lien: "" },
    ],
  },
  {
    id: "Ligne 27",
    nom: "UPN - Kinsuka",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "UPN", lien: "" },
      { nom: "Kinsuka", lien: "" },
    ],
  },
  {
    id: "Ligne 28",
    nom: "Kinkole - Gare Centrale",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinkole", lien: "" },
      { nom: "Gare Centrale", lien: "" },
    ],
  },
  {
    id: "Ligne 29",
    nom: "Ngiri-Ngiri - Kinsuka",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Ngiri-Ngiri", lien: "" },
      { nom: "Kinsuka", lien: "" },
    ],
  },
  {
    id: "Ligne 30",
    nom: "Matete - Kinsuka",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Matete", lien: "" },
      { nom: "Kinsuka", lien: "" },
    ],
  },
  {
    id: "Ligne 31",
    nom: "Zando - Kinsuka",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Zando", lien: "" },
      { nom: "Kinsuka", lien: "" },
    ],
  },
  {
    id: "Ligne 32",
    nom: "UPN - Zando",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "UPN", lien: "" },
      { nom: "Zando", lien: "" },
    ],
  },
  {
    id: "Ligne 33",
    nom: "Kinsuka - UPN",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "UPN", lien: "" },
    ],
  },
  {
    id: "Ligne 34",
    nom: "Kinsuka - Matete",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Matete", lien: "" },
    ],
  },
  {
    id: "Ligne 35",
    nom: "Kinsuka - Ngiri-Ngiri",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Ngiri-Ngiri", lien: "" },
    ],
  },
  {
    id: "Ligne 36",
    nom: "Kinsuka - Bandal",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Bandal", lien: "" },
    ],
  },
  {
    id: "Ligne 37",
    nom: "Kinsuka - Debon-Homme",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Debon-Homme", lien: "" },
    ],
  },
  {
    id: "Ligne 38",
    nom: "Kinsuka - HRGK",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "HRGK", lien: "" },
    ],
  },
  {
    id: "Ligne 39",
    nom: "Kinsuka - Victoire",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Victoire", lien: "" },
    ],
  },
  {
    id: "Ligne 40",
    nom: "Kinsuka - Intendance",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Intendance", lien: "" },
    ],
  },
  {
    id: "Ligne 41",
    nom: "Kinsuka - Petro Congo",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Petro Congo", lien: "" },
    ],
  },
  {
    id: "Ligne 42",
    nom: "Kinsuka - Selembao",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Selembao", lien: "" },
    ],
  },
  {
    id: "Ligne 43",
    nom: "Kinsuka - Mitendi",
    distance: "5 Km",
    busActifs: "Bus Actif 05",
    arrets: [
      { nom: "Kinsuka", lien: "" },
      { nom: "Mitendi", lien: "" },
    ],
  },
]; 

// Affichage des lignes dans la page lines__page

for (let i = 0; i < lignesDeTransport.length; i++) {
  const listDeLignes = document.querySelector('.lines__list--container');
  const ligneTrajet = document.createElement('li');
  ligneTrajet.classList.add('list__container');

  const ligneId = document.createElement('p');
  ligneId.textContent = lignesDeTransport[i].id;
  const ligneNom = document.createElement('p');
  ligneNom.textContent = lignesDeTransport[i].nom;
  const ligneDistance = document.createElement('p');
  ligneDistance.textContent = lignesDeTransport[i].distance;
  const ligneBusActifs = document.createElement('p');
  ligneBusActifs.textContent = lignesDeTransport[i].busActifs;

  ligneTrajet.appendChild(ligneId);
  ligneTrajet.appendChild(ligneNom);
  ligneTrajet.appendChild(ligneDistance);
  ligneTrajet.appendChild(ligneBusActifs);

  try {
    listDeLignes.appendChild(ligneTrajet);
  } catch (error) {
    
  }
}

// Affichage des lignes sur la home__page
const homeLineList = document.querySelector('.home__lines--list');

for (let i = 0; i < 4 ; i++) {
  //Ligne 1
  const ligne1Id = document.createElement('p');
  ligne1Id.textContent = lignesDeTransport[i].id;
  const ligne1Nom = document.createElement('p');
  ligne1Nom.textContent = lignesDeTransport[i].nom;
  const ligne1Distance = document.createElement('p');
  ligne1Distance.textContent = lignesDeTransport[i].distance;

  const ligne1 = document.createElement('div');
  ligne1.appendChild(ligne1Id);
  ligne1.appendChild(ligne1Nom);
  ligne1.appendChild(ligne1Distance);
  
try {
  homeLineList.appendChild(ligne1);
} catch (error) {}
}

// Gestion de la recherche
const searchForm = document.querySelector('.header__search');
const searchInput = document.querySelector('.header__search input');
const listRecherche = document.querySelector('.search__list');

// Écouteur d'événement sur la saisie dans l'input de recherche
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim(); // Récupère et nettoie la valeur saisie
  listRecherche.innerHTML = ''; // Efface les résultats précédents

  if (query.length === 0) {
    listRecherche.style.display = 'none'; // Cache la liste si aucun texte n'est saisi
    return;
  }

  // Fonction pour afficher les détails d'une ligne
function afficherDetailsLigne(id) {
  const ligne = lignesDeTransport.find((ligne) => ligne.id === id);
  
  if (ligne) {
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = 0;
      overlay.style.left = 0;
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      overlay.style.color = '#fff';
      overlay.style.padding = '20px';
      overlay.style.zIndex = 1000;

      overlay.innerHTML = `
          <div>
              <h2>${ligne.nom}</h2>
              <p>Distance : ${ligne.distance}</p>
              <p>Nombre de bus actifs : ${ligne.busActifs}</p>
              <h3>Arrêts :</h3>
              <ul>
                  ${ligne.arrets.map((arret) => `<li><a href="${arret.lien}" target="_blank">${arret.nom}</a></li>`).join('')}
              </ul>
              <button id="closeOverlay">Fermer</button>
          </div>
      `;

      document.body.appendChild(overlay);

      // Écouteur d'événements pour fermer l'overlay
      document.getElementById('closeOverlay').addEventListener('click', () => {
          document.body.removeChild(overlay);
      }
    );
  }
}

  const results = lignesDeTransport.filter((ligne) => 
    ligne.nom && ligne.nom.toLowerCase().includes(query) // Vérifie si le nom de la ligne correspond à la recherche
  );

  if (results.length > 0) {
    listRecherche.style.display = 'flex'; // Affiche la liste des résultats

    results.forEach((ligne) => {
      const ligneResultat = document.createElement('p');
      ligneResultat.textContent = ligne.nom; // Ajoute le nom de la ligne dans la liste
      ligneResultat.classList.add('search__result'); // Ajoute une classe pour le style si besoin

      // Ajout du résultat à la liste
      try {
        listRecherche.appendChild(ligneResultat);
      } catch (error) {
        console.error('Erreur lors de l’ajout du résultat :', error);
      }
      
      // Écouteur d'événements pour afficher les détails de la ligne
      ligneResultat.addEventListener('click', () => {
        afficherDetailsLigne(ligne.id);
      });
    });
  } else {
    // Si aucun résultat, on affiche un message
    const noResult = document.createElement('p');
    noResult.textContent = 'Aucun résultat trouvé.';
    noResult.classList.add('search__no-result');
    listRecherche.appendChild(noResult);
  }
});

const main = document.querySelector('main')
main.addEventListener('click', () => {
  listRecherche.style.display = listRecherche.style.display === 'none' ? 'flex' : 'none';
});
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = searchInput.value.toLowerCase().trim();

  // Logique de recherche
  if (query.includes('ligne')) {
    window.location.href = 'lines.html';
  } else if (query.includes('arrêt')) {
    alert('Page des arrêts à développer.');
  } else {
    alert('Aucune correspondance trouvée.');
  }
});

// Formulaire de souscription
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche le rechargement de la page

  const name = e.target.name.value.trim(); // Récupère et nettoie le nom
  const email = e.target.email.value.trim(); // Récupère et nettoie l'email

  if (name && email) {
      alert(`Merci ${name}, vous êtes inscrit avec l'email ${email} !`);
      e.target.reset(); // Réinitialise le formulaire
  } else {
      alert('Veuillez remplir tous les champs.');
  }
});