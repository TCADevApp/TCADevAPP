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
    id: 1,
    nom: "Masina - Kintambo",
    distance: "30 km",
    busActifs: 25,
    arrets: [
      { nom: "Masina", lien: "https://maps.google.com?q=Masina" },
      { nom: "Kintambo", lien: "https://maps.google.com?q=Kintambo" },
    ],
  },
  // Ajouter les 52 lignes ici
];

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