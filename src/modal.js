// Changed the name of variables for its to be more explicit

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//Sectionning root DOM elements
const body = document.getElementById("body");

// Header DOM Elements
const headerLogo = document.querySelector(".header-logo");
const mainNavigationBar = document.querySelector(".main-navbar");

// Main content DOM elements
const mainContent = document.querySelector(".main");
const heroSection = document.querySelector(".hero-section");

// Modal form DOM elements
const modalBackground = document.querySelector(".modal-background");
const modalButton = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".form-data");

// Footer DOM elements
const footer = document.querySelector(".footer");

// launch modal event
modalButton.forEach((btn) => btn.addEventListener("click", launchModal));

// Affiche un message d'erreur informant de l'absence d'une classe au sein de la liste de classe d'un élément 
function logAnAddClassError(missinClassName, tagName, firstClassName) {
  Console.error("La classe " + {missinClassName} + " n'a pas été ajoutée à la liste de classe de la " + {tagName} + " possédant la classe " + {firstClassName});
}

/* 
  Dispositionne en grille les éléments inclus dans la balise <body> quand la modale est active en lui ajoutant la classe body-modal-active 
*/
function gridDisplayOfBodyElements() {
  if (modalBackground.classList.contains("modal-enabled")) {

    body.classList.add("body-modal-active");

  } else {

    logAnAddClassError("modal-enabled", "div", "modal-background");

  }
}


/* 
  Vérifie que la modale est activée. Si c'est le cas, redimensionne le logo de l'entreprise et l'icône du menu hamburger contenu dans le header afin que leurs tailles correspondent à celle qu'elles ont sur la maquette 
*/
function ResizeHeaderElements() {
  if (modalBackground.classList.contains("modal-enabled")) {

    headerLogo.classList.add("header-logo-modal-active");

    mainNavigationBar.classList.add("main-navbar-modal-active");
  
  } else {

    logAnAddClassError("modal-enabled", "div", "modal-background");

  }
}

// Si la modale est activée. Ajoute une classe à la section hero qui la mets en arrière-plan et la centre au sein de son conteneur Grid
function hideHeroSection() {
  if (modalBackground.classList.contains("modal-enabled")) {
    
    heroSection.classList.add("hero-section-modal-active");

  } else {

    logAnAddClassError("modal-enabled", "div", "modal-background");

  }
}

/*
 Dispositionne en grille les éléments inclus dans la balise <main> quand la modale est active en lui ajoutant la classe main-content-modal-active 
*/
function gridDisplayOfMainContentElements() {
  if (modalBackground.classList.contains("modal-enabled")) {

    mainContent.classList.add("main-content-modal-active");

  } else {

    logAnAddClassError("modal-enabled", "div", "modal-background");

  }

}

// Si la modale est activée. Ajoute une classe au footer qui le mets en arrière-plan et le place sur la 1ère colonne et 2ème ligne de son conteneur Grid
function hideFooter() {
  if (modalBackground.classList.contains("modal-enabled")) {

    footer.classList.add("footer-modal-active");

  } else {

    logAnAddClassError("modal-enabled", "div", "modal-background");

  }
}

/*
 La fonction lancer la modale : fait apparaître celle-ci au premier plan devant/par dessus la section Hero et la place en dessous du header.
*/
function launchModal() {
  modalBackground.classList.add("modal-enabled");

  gridDisplayOfBodyElements();

  ResizeHeaderElements();

  gridDisplayOfMainContentElements();

  hideHeroSection();

  hideFooter();
}