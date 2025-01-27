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
    id: 1,
    nom: "Gare Centrale - Kingasani",
    distance: "18 km",
    busActifs: 5,
    arrets: [
      { nom: "Gare Central", lien: "https://maps.google.com?q=GareCentral" },
      { nom: "Kingasani", lien: "https://maps.google.com?q=Kingasani" },
    ],
  },
  {
    id: 2,
    nom: "Gare Central - Kintambo",
    distance: "6 Km",
    busActifs: 3,
    arrets: [
      {arret1: "Gare Central", lien: "https://maps.google.com?q=GareCentral"},
      {arret1: "Kintambo", lien: "https://maps.google.com?q=Kitambo"},
    ]
  },
  {
    id: 3,
    nom: "Zando - Ronp Point Ngaba",
    distance: "15 Km",
    busActifs: 5,
    arrets: [
      {arret: "Zando", lien: "https://maps.google.com?q=Zando"},
      {arret1: "Rond Point Ngaba", lien: "https://maps.google.com?q=RondPointNgaba"},
    ]
  },
  {
    id: 4,
    nom: "Zando - Matete",
    distance: "12 Km",
    busActifs: 3,
    arrets: [
      {arret: "Zando", lien: "https://maps.google.com?q=Zando"},
      {arret1: "Matete", lien: "https://maps.google.com?q=Matete"},
    ]
  },
  // Ajouter les 52 lignes ici
]; 

// Affichage des lignes sur la home__page
const homeLineList = document.querySelector('.home__lines--list');

  //Ligne 1
  const ligne1Nom = document.createElement('p');
  ligne1Nom.textContent = lignesDeTransport[1].nom;
  const ligne1Id = document.createElement('p');
  ligne1Id.textContent = lignesDeTransport[1].id;
  const ligne1Distance = document.createElement('p');
  ligne1Distance.textContent = lignesDeTransport[1].distance;

  const ligne1 = document.createElement('div');
  ligne1.appendChild(ligne1Nom);
  ligne1.appendChild(ligne1Id);
  ligne1.appendChild(ligne1Distance);

  //lignes 2
  const ligne2Nom = document.createElement('p');
  ligne2Nom.textContent = lignesDeTransport[2].nom;
  const ligne2Id = document.createElement('p');
  ligne2Id.textContent = lignesDeTransport[2].id;
  const ligne2Distance = document.createElement('p');
  ligne2Distance.textContent = lignesDeTransport[2].distance;

  const ligne2 = document.createElement('div');
  ligne2.appendChild(ligne2Nom);
  ligne2.appendChild(ligne2Id);
  ligne2.appendChild(ligne2Distance);

  // Ligne 3
  const ligne3Nom = document.createElement('p');
  ligne3Nom.textContent = lignesDeTransport[3].nom;
  const ligne3Id = document.createElement('p');
  ligne3Id.textContent = lignesDeTransport[3].id;
  const ligne3Distance = document.createElement('p');
  ligne3Distance.textContent = lignesDeTransport[3].distance;

  const ligne3 = document.createElement('div');
  ligne3.appendChild(ligne3Nom);
  ligne3.appendChild(ligne3Id);
  ligne3.appendChild(ligne3Distance);

  // Ligne 4
  const ligne4Nom = document.createElement('p');
  ligne4Nom.textContent = lignesDeTransport[4].nom;
  const ligne4Id = document.createElement('p');
  ligne4Id.textContent = lignesDeTransport[4].id;
  const ligne4Distance = document.createElement('p');
  ligne4Distance.textContent = lignesDeTransport[4].distance;

  const ligne4 = document.createElement('div');
  ligne4.appendChild(ligne4Nom);
  ligne4.appendChild(ligne4Id);
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