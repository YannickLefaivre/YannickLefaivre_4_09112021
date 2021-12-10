// Changed the name of variables for its to be more explicit

// Sectionning root DOM elements
const body = document.getElementById("body");

// Header DOM Elements
const headerLogo = document.querySelector(".header-logo");

const mainNavigationBar = document.querySelector(".main-navbar");

const mainNavigationBarButton = document.querySelector(".main-navbar-icon");

const navigationLinks = document.querySelectorAll(".main-navbar a");

// Main content DOM elements
const mainContent = document.querySelector(".main");

const heroSection = document.querySelector(".hero-section");

// Hero section DOM elements

const modalButton = document.querySelectorAll(".modal-btn");

// Modal form DOM elements

const modalBackground = document.querySelector(".modal-background");

const modalCloseButton = document.querySelector(".modal-close-btn");

const form = document.querySelector("form");

const formData = document.querySelectorAll(".form-data");

const submitButton = document.querySelector(".button");

const modalContent = document.querySelector(".modal-content");

const modalBody = document.querySelector(".modal-body");

const confirmationMessage =  document.querySelector(".confirmation-message");

const confirmationMessageCloseButton = document.querySelector(".confirmation-message-close-btn");

// Footer DOM elements
const footer = document.querySelector(".footer");


// Variable for verification purposes
let confirmationMessageDisplayed = false;


// Brings up the navigation bar on mobile and tablette when the user clicks the hamburger button
function editNav() {
  var header = document.getElementById("myTopnav");

  if (header.className === "topnav") {

    header.className += " responsive";

  } else {

    header.className = "topnav";

  }
}

// Displays an error message informing about the absence of a class within the class list of an element 
function LogAMissingClassError(missinClassName, tagName, firstClassName) {
  Console.error("The " + {missinClassName} + " class could not be added from the class list of the " + {tagName} + " tag having the " + {firstClassName} + " class");
}

/* 
  Grid the elements included in the <body> tag when the modal is active by adding the body-modal-active class to it 
*/
function gridDisplayOfBodyElements() {
  if (modalBackground.classList.contains("modal-enabled")) {

    body.classList.add("body-modal-active");

  } else {

    LogAMissingClassError("modal-enabled", "div", "modal-background");

  }
}


/* 
  Check that the modal is activated. If so, resize the company logo and the hamburger menu icon in the header so that their sizes match the size they have on the mockup.
*/
function ResizeHeaderElements() {
  if (modalBackground.classList.contains("modal-enabled")) {

    headerLogo.classList.add("header-logo-modal-active");

    mainNavigationBar.classList.add("main-navbar-modal-active");
  
  } else {

    LogAMissingClassError("modal-enabled", "div", "modal-background");

  }
}

// If the modal is activated. Add a class to the hero section that puts it in the background and centers it within its Grid container
function hideHeroSection() {
  if (modalBackground.classList.contains("modal-enabled")) {
    
    heroSection.classList.add("hero-section-modal-active");

  } else {

    LogAMissingClassError("modal-enabled", "div", "modal-background");

  }
}

/*
 Grid the elements included in the <main> tag when the modal is active by adding the main-content-modal-active class to it
*/
function gridDisplayOfMainContentElements() {
  if (modalBackground.classList.contains("modal-enabled")) {

    mainContent.classList.add("main-content-modal-active");

  } else {

    LogAMissingClassError("modal-enabled", "div", "modal-background");

  }

}

/*
 If the modal is activated. Adds a class to the footer which puts it in the background and places it on the 1st column and 2nd row of its Grid container 
 */
function hideFooter() {
  if (modalBackground.classList.contains("modal-enabled")) {

    footer.classList.add("footer-modal-active");

  } else if (modal.Background) {

    LogAMissingClassError("modal-enabled", "div", "modal-background");

  }
}

/* Gives focus to the first control on the form */
function givesFocusToTheFirstControlOnTheForm() {

  var firstControl = document.getElementById("first-name");
  firstControl.focus();

}

/*
  The function launch the modal: makes it appear in the foreground in front of / above the Hero section and places it below the header.
*/
function launchModal() {
  modalBackground.classList.add("modal-enabled");

  givesFocusToTheFirstControlOnTheForm();

  gridDisplayOfBodyElements();

  ResizeHeaderElements();

  gridDisplayOfMainContentElements();

  hideHeroSection();

  hideFooter();
}

/* 
  Close the modal form when the user clicks it and remove the specific layout from other sections of the site that has been changed to display the modal correctly 
*/
function closeModal() {
  if (modalBackground.classList.contains("modal-enabled")) {

    body.classList.remove("body-modal-active");

    modalBackground.classList.remove("modal-enabled");

    headerLogo.classList.remove("header-logo-modal-active");

    mainNavigationBar.classList.remove("main-navbar-modal-active");

    heroSection.classList.remove("hero-section-modal-active");

    mainContent.classList.remove("main-content-modal-active");

    footer.classList.remove("footer-modal-active");

  } else {

    console.error("The modal-enable class could not be removed from the class list of the <aside> tag having the modal-background class");

  }
}

// -- Form validation functions --


// Récupère une réference à un champ du formulaire designé par le paramètre "fieldToGet" et la retourne
function getFormField(fieldToGet) {

  const field = document.querySelector(fieldToGet);

  return field;

}

// Retrieves the value of the field designated by the "inputToGetTheValue" parameter and returns it.
function getInputValue(inputFromToGetTheValue) {

  var inputValue = document.getElementById(inputFromToGetTheValue).value;

  return inputValue;

}

// Displays an error message below the field that is not correctly completed.
function displayErrorMessage(concernedField, errorMessageToDisplay) {

  getFormField(concernedField).setAttribute("data-error", errorMessageToDisplay);
  getFormField(concernedField).setAttribute("data-error-visible", "true");

}

// Suppresses the error message that appears under an invalid field.
function deleteErrorMessage(concernedField) {

  getFormField(concernedField).removeAttribute("data-error");
  getFormField(concernedField).removeAttribute("data-error-visible");

}

/* 
  Validation of the First name or Last name field when it contains at least 2 characters (upper or lower case letters) or is not empty.
*/
function validateNameField(nameInput, nameField, nameFieldErrorMessage) {

  // First and last name pattern to check the validity of the associated field
  var namePattern = /^[a-zA-Z]{2,}$/g;
  

  if(!namePattern.test(getInputValue(nameInput)) || getInputValue(nameInput).length === 0) {

    displayErrorMessage(nameField, nameFieldErrorMessage);

    return false;

  } else {

    deleteErrorMessage(nameField);

  }

  return true;
}

/* 
  Validate the email field when it contains an email address
  whose syntax conforms to the standard of the HTML Living Standard.
*/
function validateEmailField() {

  var emailFieldId = ".form-data-email";
  var emailInputValue = getInputValue("email");

  // Email address validation regex found on the input element page, in the email type section, of the standard HTML Living specification
  var emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

 
  if(!emailPattern.test(emailInputValue) || emailInputValue.length === 0) {

    displayErrorMessage(emailFieldId, "Veuillez saisir une adresse électronique valide.");

    return false;

  } else {

    deleteErrorMessage(emailFieldId);

  }

  return true;
}


// Validation of the birthdate field when it is not empty.
function validateBirthdateField() {

  var birthdateFieldId = ".form-data-birthdate";

  if(getInputValue("birthdate").length === 0) {

    displayErrorMessage(birthdateFieldId, "Vous devez entrer votre date de naissance.");
    
    return false;
    
  } else {

    deleteErrorMessage(birthdateFieldId);

  }

  return true;
}

// Validation of the number of tournaments field when it is not empty and contains only numbers.
function validateNumberOfTournamentsField() {

  var numberOfTournamentsFieldId = ".form-data-number-of-tournaments-attended";
  var numberOfTournamentsInputValue = getInputValue("number-of-tournaments");

  // A Regex that only matches a string with a minimum of two or more numbers
  var numberOfTournamentsPattern = /^\d{1,2}$/g;

  if(!numberOfTournamentsPattern.test(numberOfTournamentsInputValue) || numberOfTournamentsInputValue.length === 0) {

    displayErrorMessage(numberOfTournamentsFieldId, "Vous devez saisir une valeur numérique.");

    return false;

  } else {

    deleteErrorMessage(numberOfTournamentsFieldId);

  }

  return true;
}


/* 
  Validation of the field set for the location of the tournament(s) in which the user has already participated when at least one option has
  been chosen.
*/
function validateTournamentLocationsFieldset() {

  var tournamentLocationsfieldsetId = ".form-data-tournament-location";

  // Retrieve a reference to all the checkbox buttons of the cities where the user has already participated in a GameOn event.
  var tournamentLocationsInputs = document.getElementsByName("tournament-location");

  // Go through the list of checkbox buttons naming "tournament-location" to see if there is at least one checked.
  var atLeastOneLocationIsChecked = false;
  for (let location of tournamentLocationsInputs) {

    if(location.checked) {

      atLeastOneLocationIsChecked = true;

    }
  };

  if(!atLeastOneLocationIsChecked) {

    displayErrorMessage(tournamentLocationsfieldsetId, "Vous devez choisir une option.");

    return false;

  } else {

    deleteErrorMessage(tournamentLocationsfieldsetId);

  }

  return true;
}


// Validation of the terms and conditions field by ensuring that the user has checked the corresponding box.
function validateTermsAndConditionsFieldset() {

  var termsAndConditionsFieldsetId = ".form-data-terms-conditions-and-newsletter";

  // If the terms and conditions checkbox has not been checked then display an error message to warn the user that this field has not been validated.
  if(!document.getElementById("checkbox-terms-and-conditions").checked) {

    displayErrorMessage(termsAndConditionsFieldsetId, "Vous devez vérifier que vous acceptez les termes et conditions.");

    return false;

  } else {

    deleteErrorMessage(termsAndConditionsFieldsetId);

  }

  return true;
}


/* 
  Validation of the form when all the fields are validated, otherwise at the first invalid field, 
  cancel sending of the form to the server. 
*/
function validate() {

  if(!validateNameField(
    "first-name", 
    ".form-data-first-name", 
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.")) {

    return false;

  }

  if(!validateNameField(
    "last-name", 
    ".form-data-last-name", 
    "Veuillez entrer 2 caractères ou plus pour le champ du nom.")) {

    return false;

  }

  if(!validateEmailField()) {

    return false;

  }

  if(!validateBirthdateField()) {

    return false;

  }

  if(!validateNumberOfTournamentsField()) {

    return false;

  }

  if(!validateTournamentLocationsFieldset()) {

    return false;

  }

  if(!validateTermsAndConditionsFieldset()) {

    return false;

  }

  // all the fields have passed validation
  return true;
}

// Affiche le message de confirmation que l'envoie du formulaire a réussi
function displayConfirmationMessage() {

  /* 
    1. Réajustement de la hauteur de la modale ;
    2. Changement du display du corps de la modale pour Flexbox ;
    3. Affichage du message de confirmation et du bouton de fermeture de la modale.
  */

    modalContent.classList.add("modal-content-confirmation-message-active"); /* 1 */
    modalBody.classList.add("modal-body-confirmation-message-active"); /* 2 */
    form.classList.add("content-hidden"); /* 2 */
  
    confirmationMessage.classList.remove("content-hidden"); /* 3 */
    confirmationMessageCloseButton.classList.remove("content-hidden"); /* 3 */

}

// Redisplays the form and again hides the confirmation message of the successful submission
function resetForm(withXButton = true, xButton = HTMLButtonElement) {

  if(withXButton) {

    xButton.setAttribute("type", "reset");
    xButton.setAttribute("form", "modal-form"); 

  }

  modalContent.classList.remove("modal-content-confirmation-message-active");
  modalBody.classList.remove("modal-body-confirmation-message-active");

  form.classList.remove("content-hidden");

  confirmationMessage.classList.add("content-hidden");
  confirmationMessageCloseButton.classList.add("content-hidden");

  return true;
}

/*
  Implemented the behavior of the "submit" event so that the form is not sent 
  directly after passing validation. Thus allowing to appear the confirmation 
  message of the successful sending. 
*/
function onSubmit(event) {

  event.preventDefault();

  /* 
    Calls the validate () function to check the validity of each field in the form.
    If there is one that is not valid an error message will be displayed below the 
    invalid field and validation will not go further until this field is validated.
  */
  if(!validate()) {

    return false;

  }
 
  displayConfirmationMessage();

  confirmationMessageDisplayed = true;

  return true;
}

// Opens or closes the navigation bar when the user clicks the hamburger menu icon
mainNavigationBarButton.addEventListener("click", editNav);

// Closes the navigation bar on mobile each time the user clicks on any of the navigation links 
navigationLinks.forEach((navigationLink) => navigationLink.addEventListener("click", editNav));

// Launch modal event
modalButton.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCloseButton.addEventListener("click", function() {

  closeModal();

  if(confirmationMessageDisplayed) {

    resetForm(true, modalCloseButton);

    confirmationMessageDisplayed = false;

  }

});

/*
  Addition of an event listener to validate the form when the user clicks 
  on the "C'est parti" button. 
*/
submitButton.addEventListener("click", validate);

// Adding a submit event listener to the form to change the default behavior 
form.addEventListener("submit", onSubmit);

/* 
  Closing of the modal when the user clicks on the "Close" button
  and reestablishing / reappearing the form fields in the background.
*/
confirmationMessageCloseButton.addEventListener("click", function() {

  closeModal();

  resetForm(false);

  confirmationMessageDisplayed = false;
});