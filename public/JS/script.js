// Gestion du menu burger
  const burger = document.querySelector('.header__burger');
  const menu = document.querySelector('.nav__menu');

  burger.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

// Gestion des pages
  const homePage = document.querySelector('.home__page');
  const linesPage = document.querySelector(".lines__page"); 
  const contactPage = document.querySelector('.contact__page');
  const aboutPage = document.querySelector('.about__page');
  function locationFlex() {
    if (homePage) {
      homePageShow();
    } else if (linesPage){
      linesPageShow();
    } else if (contactPage) {
      contactPageShow();
    } else if (aboutPage) {
      aboutPageShow();
    } else{
      console.log('404')
    }
  };locationFlex();

// Gestion des buttons header 
  function homePageShow() {
    const homeBtn = document.querySelectorAll('.menu__home--btn');
    homeBtn.forEach((homeBtn) =>{
      homeBtn.style.backgroundColor = '#d62828';
    });
  }
  
  function linesPageShow() {
    const linesButton = document.querySelectorAll('.menu__lines--btn');
    linesButton.forEach((linesButton) =>{
      linesButton.style.backgroundColor = '#d62828';
    });
  }
  
  function contactPageShow() {
    const contactButton = document.querySelectorAll('.menu__contact--btn');
    contactButton.forEach((contactButton) =>{
      contactButton.style.backgroundColor = '#d62828';
    });
  }
  
  function aboutPageShow() {
    const aboutButton = document.querySelectorAll('.menu__about--btn');
    aboutButton.forEach((aboutButton) =>{
      aboutButton.style.backgroundColor = '#d62828';
    });
  }

// Gestion du bouton pour afficher l'overlay lines-list
  const showLinesButton = document.querySelector('.show__lines--btn');
  const overlayLinesList = document.querySelector('.lines__list');
  const closeOverlay = document.querySelector('.close__lines--btn');
  const stopsLineContainer = document.querySelector('.line__stops');

  if (linesPage) {
    showLinesButton.addEventListener('click', () => {
      overlayLinesList.style.display = overlayLinesList.style.display === 'flex' ? 'none' : 'flex';
      afficherOverlayLiensList();
      afficherOverlayStopsLine();
    });
  }

  function afficherOverlayLiensList() {
    if (overlayLinesList.style.display === 'flex') {
      const overlayLinesListDiv = document.querySelector('.lines__list div');
      const left = getComputedStyle(overlayLinesListDiv).width; // Utilisez getComputedStyle pour obtenir la largeur
      showLinesButton.style.left = left;
  } else {
      showLinesButton.style.left = "0"; 
  }
  }

  function afficherOverlayStopsLine() {
    if (stopsLineContainer.style.display === 'flex') {
      const overlayLinesList = document.querySelector('.lines__list');
      const left = getComputedStyle(overlayLinesList).width; // Utilisez getComputedStyle pour obtenir la largeur
      showLinesButton.style.left = left;
    } else {
      afficherOverlayLiensList();
    }
  }

// Base de données des lignes de transport
  const lignesDeTransport = [
    {
      id: "Ligne 01",
      nom: "Commerce - Kingasani",
      distance: "18 km",
      busActifs: "Bus Actif 05",
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
      arrets: [
        { nom: "1. Arrêt Kingasani Ya SukaProchain(s) départ(s)", lien: "" },
        { nom: "2. De La PlaineProchain(s) départ(s)", lien: "" },
        { nom: "3. TuanaProchain(s) départ(s)", lien: "" },
        { nom: "4. Masina/Q3Prochain(s) départ(s)", lien: "" },
        { nom: "5. PascalProchain(s) départ(s)", lien: "" },
        { nom: "6. Arrêt BekatefProchain(s) départ(s)", lien: "" },
        { nom: "7. Kutu IProchain(s) départ(s)", lien: "" },
        { nom: "8. Marché LibertéProchain(s) départ(s)", lien: "" },
        { nom: "9. Hopital MutomboProchain(s) départ(s)", lien: "" },
        { nom: "10. TribunalProchain(s) départ(s)", lien: "" },
        { nom: "11. Arrêt Quartier 1Prochain(s) départ(s)", lien: "" },
        { nom: "12. AbattoirProchain(s) départ(s)", lien: "" },
        { nom: "13. Debon-HommeProchain(s) départ(s)", lien: "" },
        { nom: "14. Hospital AkramProchain(s) départ(s)", lien: "" },
        { nom: "15. Rue 17Prochain(s) départ(s)", lien: "" },
        { nom: "16. Rue 16Prochain(s) départ(s)", lien: "" },
        { nom: "17. Rue 15Prochain(s) départ(s)", lien: "" },
        { nom: "18. Petit Boulevard De Limété, 616Prochain(s) départ(s)", lien: "" },
        { nom: "19. Rue 8Prochain(s) départ(s)", lien: "" },
        { nom: "20. 7 E Rue, 183Prochain(s) départ(s)", lien: "" },
        { nom: "21. Rue 6Prochain(s) départ(s)", lien: "" },
        { nom: "22. Rue 4Prochain(s) départ(s)", lien: "" },
        { nom: "23. Rue 3Prochain(s) départ(s)", lien: "" },
        { nom: "24. Rue 2Prochain(s) départ(s)", lien: "" },
        { nom: "25. Saint-RaphaelProchain(s) départ(s)", lien: "" },
        { nom: "26. 20 MaiProchain(s) départ(s)", lien: "" },
        { nom: "27. IssProchain(s) départ(s)", lien: "" },
        { nom: "28. Av. De La FunaProchain(s) départ(s)", lien: "" },
        { nom: "29. ZigidaProchain(s) départ(s)", lien: "" },
        { nom: "30. R. SongolotoProchain(s) départ(s)", lien: "" },
        { nom: "31. Av. KabindaProchain(s) départ(s)", lien: "" },
        { nom: "32. Avenue De Kabambare, 53Prochain(s) départ(s)", lien: "" },
        { nom: "33. Av. KasaiProchain(s) départ(s)", lien: "" },
        { nom: "34. Av. Croix RougeProchain(s) départ(s)", lien: "" },
        { nom: "35. Av. KitegaProchain(s) départ(s)", lien: "" },
        { nom: "36. Av. KilosaProchain(s) départ(s)", lien: "" },
        { nom: "37. Av. ItagaProchain(s) départ(s)", lien: "" },
        { nom: "38. Av. RwakadingiProchain(s) départ(s)", lien: "" },
        { nom: "39. Avenue Du Kasai, 265Prochain(s) départ(s)", lien: "" },
        { nom: "40. Avenue Tombalbaye, 232Prochain(s) départ(s)", lien: "" },
        { nom: "41. Avenue Luambo Makiadi, 1Prochain(s) départ(s)", lien: "" },
        { nom: "42. PlateauProchain(s) départ(s)", lien: "" },
        { nom: "43. Avenue Tombalbaye, 1155Prochain(s) départ(s)", lien: "" },

      ],
    },
    {
      id: "Ligne 02",
      nom: "Royal - Masina Sans Fil",
      distance: "12 Km",
      busActifs: "Bus Actif 05",
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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
      lienMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0000000000005!2d15.31300031475368!3d-4.331999996982073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b3b3b3b3b3b%3A0x1a6a3b3b3b3b3b3b!2sKingasani%2C%20Kinshasa!5e0!3m2!1sfr!2scd!4v1629780000000!5m2!1sfr!2scd",
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

    const ligne1 = document.createElement('a');
    ligne1.href = "/lignes";
    ligne1.appendChild(ligne1Id);
    ligne1.appendChild(ligne1Nom);
    ligne1.appendChild(ligne1Distance);
    
  try {
    homeLineList.appendChild(ligne1);
  } catch (error) {}
  }

// Fonction pour trouver un element dans le tableau
  function trouverElementDuTableau(idLigne) {
    const lineMap = document.querySelector('.line__map')
    const stopsLineContainer = document.querySelector('.line__stops');
    const lineMapKin = document.querySelector('.line__map--kin');

    // Trouver la ligne correspondante dans le tableau lignesDeTransport
    const ligne = lignesDeTransport.find((ligne) => ligne.id === idLigne);

    if (ligne) {
        // Vérifie si la div line__map est déjà visible
        if (lineMap.style.display === 'flex' && stopsLineContainer.style.display === 'flex') {
            stopsLineContainer.innerHTML = ''; // Réinitialiser la div line__stops
            lineMap.innerHTML = '';// Réinitialiser la div line__map
        } else {
            lineMapKin.style.display = 'none'; // Cacher le conteneur des détails de la ligne
            lineMap.style.display = 'flex'; // Rendre visible
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

        // Ajouter les éléments à la div line__stops
        stopsLineContainer.appendChild(idElement);
        stopsLineContainer.appendChild(nomElement);
        stopsLineContainer.appendChild(distanceElement);
        stopsLineContainer.appendChild(arretsTitre);
        stopsLineContainer.appendChild(arretsList);

        // Appeler la fonction pour afficher la carte Google Maps
        afficherCarte(ligne.lienMaps);
      }
      // Fonction pour afficher la carte Google Maps
        function afficherCarte(lienMaps) {
          const lineMap = document.querySelector('.line__map');
          lineMap.innerHTML = ''; // Réinitialiser le contenu de la carte

          // Créer un iframe pour Google Maps
          const mapIframe = document.createElement('iframe');
          mapIframe.src = lienMaps; // Utiliser le lien de Google Maps
          mapIframe.allowFullscreen = true; // Autoriser le mode plein écran
          mapIframe.loading = 'lazy'; // Chargement paresseux

          // créer un bouton pour fermer la carte
          const closeButton = document.createElement('button');
          closeButton.textContent = 'X';
          closeButton.classList.add('close__btn');
          
          // Écouteur d'événements pour fermer la carte 
          closeButton.addEventListener('click', () => {
            lineMap.style.display = 'none'; // Cacher la carte
            stopsLineContainer.style.display = 'none'; // Cacher les détails de la ligne
            lineMapKin.style.display = 'flex'; // Afficher le conteneur des détails de la ligne
            afficherOverlayLiensList();
          });

          // Ajouter l'iframe et le button fermer à la div line__map
          lineMap.appendChild(mapIframe);
          lineMap.appendChild(closeButton);
        }

      // Appeler la fonction pour activer l'écoute des clics
      afficherDetailsLigneDepuisListe();
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
    } else if (query.includes('lig')){
      const results = lignesDeTransport.filter((ligne) => 
        ligne.id && ligne.id.toLowerCase().includes(query) // Vérifie si l'id de la ligne correspond à la recherche
      );
      resultsList(results);
    } else{
      const results = lignesDeTransport.filter((ligne) => 
        ligne.nom && ligne.nom.toLowerCase().includes(query) // Vérifie si le nom de la ligne correspond à la recherche
      );
      resultsList(results);
    }

    function resultsList(results) {
      if (results.length > 0) {
        listRecherche.style.display = 'flex'; // Affiche la liste des résultats
  
        results.forEach((ligne) => {
          const ligneResultat = document.createElement('a');
          ligneResultat.textContent = ligne.nom; // Ajoute le nom de la ligne dans la liste
          ligneResultat.classList.add('search__result'); // Ajoute une classe pour le style si besoin
          ligneResultat.id = ligne.id; // Ajoute l'id de la ligne comme attribut id
          ligneResultat.href = "/lignes"; // Ajoute l'href de la page lignes
  
          // Ajout du résultat à la liste
          try {
            listRecherche.appendChild(ligneResultat);
          } catch (error) {
            console.error('Erreur lors de l’ajout du résultat :', error);
          }
          
          // Écouteur d'événements pour afficher les détails de la ligne
          ligneResultat.addEventListener('click', () => {
            locationFlex();
            const idLigne = ligneResultat.id;
            trouverElementDuTableau(idLigne);
            const overlayLinesList = document.querySelector('.lines__list');
            overlayLinesList.style.display = 'flex'
            const stopsLineContainer = document.querySelector('.line__stops');
            stopsLineContainer.style.display = 'flex';
            afficherOverlayStopsLine();
          });
        });
      } else {
        // Si aucun résultat, on affiche un message
        const noResult = document.createElement('p');
        noResult.textContent = 'Aucun résultat trouvé.';
        noResult.classList.add('search__no-result');
        listRecherche.appendChild(noResult);
      }
    } 
  });

  // Écouteur d'événements pour afficher ou masquer la liste de recherche
  const main = document.querySelector('main')
  main.addEventListener('click', () => {
    if (listRecherche.style.display === 'flex') {
      listRecherche.style.display = 'none';
      searchInput.value = '';
    }
  });

  // Fonction pour afficher les arrêts d'une ligne
  function afficherDetailsLigneDepuisListe() {
    const containersLignes = document.querySelectorAll('.lines__list--container li');

    containersLignes.forEach(container => {
        container.addEventListener('click', function() {
            // Récupérer l'ID à partir du texte contenu dans le premier paragraphe
            const idLigne = container.firstChild.textContent;
            const stopsLineContainer = document.querySelector('.line__stops');
            stopsLineContainer.style.display = 'flex';
            trouverElementDuTableau(idLigne);
            afficherOverlayStopsLine();
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
    de données si oui appeler la fonction locationFlex() et appeler 
    la fonction trouverElementTableau() pour afficher les détails de la 
    ligne recherchée */
    const ligne = lignesDeTransport.find((ligne) => ligne.nom.toLowerCase().includes(query));

    if (ligne) {
        locationFlex();
        trouverElementDuTableau(ligne.id);
    } else {
        alert('Aucun résultat trouvé.');
    }
  });

// Gestion du bouton inscrption
  document.querySelectorAll('sign__in').forEach((signIn) =>{
    signIn.addEventListener('click', () =>{
      cons$.log('nope');
      alert('Pas disponible');
    })
  })

// Formulaire de souscription page contact
  if (homePage) {
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
  }
/*
// Initialisation de la carte Google Maps
  let map;
  let markers = {}; // Pour stocker les marqueurs des appareils

  function initMap() {
    map = new google.maps.Map(document.querySelector('.map'), {
      center: { lat: -4.3276, lng: 15.3136 }, // Kinshasa par défaut
      zoom: 12,
    });
  }

  // Connexion au serveur WebSocket
  const socket = io();

  // Reçoit les mises à jour de position des appareils
  socket.on('locationUpdated', (positions) => {
    for (const [deviceId, position] of Object.entries(positions)) {
      const { latitude, longitude } = position;

      // Si le marqueur existe déjà, on le met à jour
      if (markers[deviceId]) {
        markers[deviceId].setPosition({ lat: latitude, lng: longitude });
      } else {
        // Sinon, on crée un nouveau marqueur
        markers[deviceId] = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: Appareil `${deviceId}`,
        });
      }
    }
  });

  // Initialisation de la carte au chargement de la page
  window.onload = initMap;
*/
