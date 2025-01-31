// Gestion du menu burger
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Gestion du logo pour retour à l'accueil
const logo = document.querySelector('.header__logo');

// Fonction  sectionHomeShow pour afficher la section home__page et fermer les autres sections
function sectionHomeShow() {
  const linesPage = document.querySelector('.lines__page');
  const homePage = document.querySelector('.home__page');
  const contactPage = document.querySelector('.contact__page');
  const aboutpage = document.querySelector('.about__page');

  linesPage.style.display = 'none';
  homePage.style.display = 'block';
  contactPage.style.display = 'none';
  aboutpage.style.display = 'none';
};
logo.addEventListener('click', () => {
  sectionHomeShow();
});

// Gestion du bouton pour afficher la page des lignes
const linesButton = document.querySelector('.menu__lignes--btn');

// Fonction  sectionLinesShow pour afficher la section lines__page et fermer les autres sections
function sectionLinesShow() {
  const linesPage = document.querySelector('.lines__page');
  const homePage = document.querySelector('.home__page');
  const contactPage = document.querySelector('.contact__page');
  const aboutpage = document.querySelector('.about__page');

  linesPage.style.display = 'block';
  homePage.style.display = 'none';
  contactPage.style.display = 'none';
  aboutpage.style.display = 'none';
};
linesButton.addEventListener('click', () => {
  sectionLinesShow();
});

// Gestion du bouton pour afficher la page de contact
const contactButton = document.querySelector('.menu__contact--btn');
// Fonction  sectionContactShow pour afficher la section contact__page et fermer les autres sections
function sectionContactShow() {
  const linesPage = document.querySelector('.lines__page');
  const homePage = document.querySelector('.home__page');
  const contactPage = document.querySelector('.contact__page');
  const aboutpage = document.querySelector('.about__page');

  linesPage.style.display = 'none';
  homePage.style.display = 'none';
  contactPage.style.display = 'block';
  aboutpage.style.display = 'none';
};
contactButton.addEventListener('click', () => {
  sectionContactShow();
});

// Gestion du bouton pour afficher la page à propos
const aboutButton = document.querySelector('.menu__about--btn');

// Fonction  sectionAboutShow pour afficher la section about__page et fermer les autres sections
function sectionAboutShow() {
  const linesPage = document.querySelector('.lines__page');
  const homePage = document.querySelector('.home__page');
  const contactPage = document.querySelector('.contact__page');
  const aboutpage = document.querySelector('.about__page');

  linesPage.style.display = 'none';
  homePage.style.display = 'none';
  contactPage.style.display = 'none';
  aboutpage.style.display = 'block';
};
aboutButton.addEventListener('click', () => {
  sectionAboutShow();
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

  ligneTrajet.appendChild(ligneId);
  ligneTrajet.appendChild(ligneNom);

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

// Fonction pour trouver un element dans le tableau
function trouverElementDuTableau(idLigne) {
  const detailsLineContainer = document.querySelector('.details__line');
  const detailsContainer = document.querySelector('.lines__details--container');
  // Trouver la ligne correspondante dans le tableau lignesDeTransport
  const ligne = lignesDeTransport.find((ligne) => ligne.id === idLigne);

  if (ligne) {
      // Vérifie si la div details__line est déjà visible
      if (detailsLineContainer.style.display === 'block') {
          // Réinitialiser la div details__line
          detailsLineContainer.innerHTML = '';
      } else {
          detailsContainer.style.display = 'none'; // Cacher le conteneur des détails de la ligne
          detailsLineContainer.style.display = 'block'; // Rendre visible
      }

      // Créer et ajouter les éléments pour les détails de la ligne
      const idElement = document.createElement('p');
      idElement.textContent = `ID : ${ligne.id}`;

      const nomElement = document.createElement('p');
      nomElement.textContent = `Nom : ${ligne.nom}`;

      const distanceElement = document.createElement('p');
      distanceElement.textContent = `Distance : ${ligne.distance}`;

      const arretsTitre = document.createElement('h3');
      arretsTitre.textContent = 'Arrêts :';

      const arretsList = document.createElement('ul');
      ligne.arrets.forEach((arret) => {
          const arretItem = document.createElement('li');
          arretItem.textContent = arret.nom;
          arretsList.appendChild(arretItem);
      });

      // Créer un bouton pour fermer
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Fermer';
      closeButton.addEventListener('click', () => {
          // Réinitialiser la div details__line
          detailsLineContainer.innerHTML = '';
          detailsLineContainer.style.display = 'none'; // Cacher la div details__line
          detailsContainer.style.display = 'flex'; // Afficher le conteneur principal
      });

      // Ajouter les éléments à la div details__line
      detailsLineContainer.appendChild(idElement);
      detailsLineContainer.appendChild(nomElement);
      detailsLineContainer.appendChild(distanceElement);
      detailsLineContainer.appendChild(arretsTitre);
      detailsLineContainer.appendChild(arretsList);
      detailsLineContainer.appendChild(closeButton);
  }
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

  const results = lignesDeTransport.filter((ligne) => 
    ligne.nom && ligne.nom.toLowerCase().includes(query) // Vérifie si le nom de la ligne correspond à la recherche
  );

  if (results.length > 0) {
    listRecherche.style.display = 'flex'; // Affiche la liste des résultats

    results.forEach((ligne) => {
      const ligneResultat = document.createElement('p');
      ligneResultat.textContent = ligne.nom; // Ajoute le nom de la ligne dans la liste
      ligneResultat.classList.add('search__result'); // Ajoute une classe pour le style si besoin
      ligneResultat.id = ligne.id; // Ajoute l'id de la ligne comme attribut id

      // Ajout du résultat à la liste
      try {
        listRecherche.appendChild(ligneResultat);
      } catch (error) {
        console.error('Erreur lors de l’ajout du résultat :', error);
      }
      
      // Écouteur d'événements pour afficher les détails de la ligne
      ligneResultat.addEventListener('click', () => {

        // Appel de la fonction sectionLinesShow
        sectionLinesShow();
        
        const idLigne = ligneResultat.id;
        console.log(idLigne);

        // Appel de la function trouverElementDuTableau
        trouverElementDuTableau(idLigne);
        
        //afficherDetailsLigne(ligne.id);
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

// Écouteur d'événements pour afficher ou masquer la liste de recherche
const main = document.querySelector('main')
main.addEventListener('click', () => {
  listRecherche.style.display = listRecherche.style.display === 'none' ? 'flex' : 'none';
});

// Fonction pour trouver un element dans le tableau
function trouverElementDuTableau(idLigne) {
  const detailsLineContainer = document.querySelector('.details__line');
  const detailsContainer = document.querySelector('.lines__details--container');
  // Trouver la ligne correspondante dans le tableau lignesDeTransport
  const ligne = lignesDeTransport.find((ligne) => ligne.id === idLigne);

  if (ligne) {
      // Vérifie si la div details__line est déjà visible
      if (detailsLineContainer.style.display === 'block') {
          // Réinitialiser la div details__line
          detailsLineContainer.innerHTML = '';
      } else {
          detailsContainer.style.display = 'none'; // Cacher le conteneur des détails de la ligne
          detailsLineContainer.style.display = 'block'; // Rendre visible
      }

      // Créer et ajouter les éléments pour les détails de la ligne
      const idElement = document.createElement('p');
      idElement.textContent = `ID : ${ligne.id}`;

      const nomElement = document.createElement('p');
      nomElement.textContent = `Nom : ${ligne.nom}`;

      const distanceElement = document.createElement('p');
      distanceElement.textContent = `Distance : ${ligne.distance}`;

      const arretsTitre = document.createElement('h3');
      arretsTitre.textContent = 'Arrêts :';

      const arretsList = document.createElement('ul');
      ligne.arrets.forEach((arret) => {
          const arretItem = document.createElement('li');
          arretItem.textContent = arret.nom;
          arretsList.appendChild(arretItem);
      });

      // Créer un bouton pour fermer
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Fermer';
      closeButton.addEventListener('click', () => {
          // Réinitialiser la div details__line
          detailsLineContainer.innerHTML = '';
          detailsLineContainer.style.display = 'none'; // Cacher la div details__line
          detailsContainer.style.display = 'flex'; // Afficher le conteneur principal
      });

      // Ajouter les éléments à la div details__line
      detailsLineContainer.appendChild(idElement);
      detailsLineContainer.appendChild(nomElement);
      detailsLineContainer.appendChild(distanceElement);
      detailsLineContainer.appendChild(arretsTitre);
      detailsLineContainer.appendChild(arretsList);
      detailsLineContainer.appendChild(closeButton);
  }
}

// Fonction pour afficher les détails d'une ligne
function afficherDetailsLigneDepuisListe() {
  const containersLignes = document.querySelectorAll('.lines__list--container li');

  containersLignes.forEach(container => {
      container.addEventListener('click', function() {
          // Récupérer l'ID à partir du texte contenu dans le premier paragraphe
          const idLigne = container.firstChild.textContent;

          trouverElementDuTableau(idLigne);
      });
  });
}
// Appeler la fonction pour activer l'écoute des clics
afficherDetailsLigneDepuisListe();

// Ecouter d'evenement pour le formulaire de recherche
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const query = searchInput.value.toLowerCase().trim();

  // Vérifier si la recherche est vide
  if (query.length === 0) {
      alert('Veuillez saisir un texte pour effectuer une recherche.');
      return;
  }

  /* Vérifier si la recherche correspond à une ligne dans la base 
  de données si oui appeler la fonction sectionLinesShow() et appeler 
  la fonction trouverElementTableau() pour afficher les détails de la 
  ligne recherchée */
  const ligne = lignesDeTransport.find((ligne) => ligne.nom.toLowerCase().includes(query));

  if (ligne) {
      sectionLinesShow();
      trouverElementDuTableau(ligne.id);
  } else {
      alert('Aucun résultat trouvé.');
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