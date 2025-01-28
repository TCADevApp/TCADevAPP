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
    Test: "Test",
  },
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

// Affichage des lignes sur la home__page
const homeLineList = document.querySelector('.home__lines--list');

  //Ligne 1
  const ligne1Id = document.createElement('p');
  ligne1Id.textContent = lignesDeTransport[1].id;
  const ligne1Nom = document.createElement('p');
  ligne1Nom.textContent = lignesDeTransport[1].nom;
  const ligne1Distance = document.createElement('p');
  ligne1Distance.textContent = lignesDeTransport[1].distance;

  const ligne1 = document.createElement('div');
  ligne1.appendChild(ligne1Id);
  ligne1.appendChild(ligne1Nom);
  ligne1.appendChild(ligne1Distance);

  //lignes 2
  const ligne2Id = document.createElement('p');
  ligne2Id.textContent = lignesDeTransport[2].id;
  const ligne2Nom = document.createElement('p');
  ligne2Nom.textContent = lignesDeTransport[2].nom;
  const ligne2Distance = document.createElement('p');
  ligne2Distance.textContent = lignesDeTransport[2].distance;

  const ligne2 = document.createElement('div');
  ligne2.appendChild(ligne2Id);
  ligne2.appendChild(ligne2Nom);
  ligne2.appendChild(ligne2Distance);

  // Ligne 3
  const ligne3Id = document.createElement('p');
  ligne3Id.textContent = lignesDeTransport[3].id;
  const ligne3Nom = document.createElement('p');
  ligne3Nom.textContent = lignesDeTransport[3].nom;
  const ligne3Distance = document.createElement('p');
  ligne3Distance.textContent = lignesDeTransport[3].distance;

  const ligne3 = document.createElement('div');
  ligne3.appendChild(ligne3Id);
  ligne3.appendChild(ligne3Nom);
  ligne3.appendChild(ligne3Distance);

  // Ligne 4
  const ligne4Id = document.createElement('p');
  ligne4Id.textContent = lignesDeTransport[4].id;
  const ligne4Nom = document.createElement('p');
  ligne4Nom.textContent = lignesDeTransport[4].nom;
  const ligne4Distance = document.createElement('p');
  ligne4Distance.textContent = lignesDeTransport[4].distance;

  const ligne4 = document.createElement('div');
  ligne4.appendChild(ligne4Id);
  ligne4.appendChild(ligne4Nom);
  ligne4.appendChild(ligne4Distance);

homeLineList.appendChild(ligne1);
homeLineList.appendChild(ligne2);
homeLineList.appendChild(ligne3);
homeLineList.appendChild(ligne4);
console.log(homeLineList);

// Gestion de la recherche
const searchForm = document.querySelector('.header__search');
const searchInput = document.querySelector('.header__search input');

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
    document.getElementById('subscribeForm').addEventListener('submit', function(e) 
    {
        e.preventDefault(); // Empêche le rechargement

        const name = e.target.name.value;
        const email = e.target.email.value;

        if (name && email) {
        alert(`Merci ${name}, vous êtes inscrit avec l'email ${email} !`);
        e.target.reset();
        } else {
        alert('Veuillez remplir tous les champs.');
        }
    });
  
// Fonction pour afficher les détails d'une ligne
  function afficherDetailsLigne(id) 
  {
    const ligne = lignesDeTransport.find((ligne) => ligne.id === id);
    if (ligne) {
      const overlay = document.createElement('div');
      overlay.innerHTML = `
        <div>
          <h2>${ligne.nom}</h2>
          <p>Distance : ${ligne.distance}</p>
          <p>Nombre de bus actifs : ${ligne.busActifs}</p>
          <h3>Arrêts :</h3>
          <ul>
            ${ligne.arrets.map((arret) => `<li><a href="${arret.lien}" target="_blank">${arret.nom}</a></li>`).join('')}
          </ul>
        </div>
      `;
      document.body.appendChild(overlay);
    }

    // Fonction pour afficher les détails d'une ligne
    function afficherDetailsLigne(id) {
    const ligne = lignesDeTransport.find((ligne) => ligne.id === id);
    if (ligne) 
        {
            const overlay = document.createElement('div');
            overlay.innerHTML = `
            <div>
                <h2>${ligne.nom}</h2>
                <p>Distance : ${ligne.distance}</p>
                <p>Nombre de bus actifs : ${ligne.busActifs}</p>
                <h3>Arrêts :</h3>
                <ul>
                ${ligne.arrets.map((arret) => `<li><a href="${arret.lien}" target="_blank">${arret.nom}</a></li>`).join('')}
                </ul>
            </div>
            `;
            document.body.appendChild(overlay);
        }
    }
  }