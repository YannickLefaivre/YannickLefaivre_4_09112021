// Changed the name of variables for its to be more explicit

// Sectionning root DOM elements
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

const modalCloseButton = document.querySelector(".modal-close-btn");

const formData = document.querySelectorAll(".form-data");

// Footer DOM elements
const footer = document.querySelector(".footer");


// Launch modal event
modalButton.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
modalCloseButton.addEventListener("click", closeModal);


// Form validation functions

/* 
  First and last name inputs event :

  Vérifie que l'utilisateur a remplie correctement le champ Prénom et Nom en vérifiant si elles possèdent au minimum 2 caractères ou ne sont pas vide


firstNameInput.addEventListener("input", function(event) {
  var firstName = event.target.value;
  
  var nameRegex = /[a-zA-Z]{2,}/g;

  if (!nameRegex.test(firstName)) {

    if (firstName.length === 0) {

      console.error("Empty input field detected.");

    } else {

      console.error(firstName, "is a invalid input.");

    }

  } else {

    console.log(firstName, "is a valid input.");

  }
});

lastNameInput.addEventListener("input", function(event) {
  var lastName = event.target.value;

  if (lastName.length < 2 || lastName.length === 0) {

    if (lastName.length === 0) {

      console.log("Empty input field detected.");

    } else {

      console.log(lastName, "is a invalid input.");

    }

    validationInProgress = false;

  } else {

    console.log(lastName, "is a valid input.");

    validationInProgress = true;

  }
});


/* 
  Ajoute un évènement écoutant tout changement effectuer dans le champ Email et vérifie que les données saisies dans celui-ci respectent les règles syntaxiques des adresses email en utilisant une Regex.

emailInput.addEventListener("input", function(event) {

  var typedEmail = event.target.value;

  /* 
    RFC (Request for Comment) 5322 compliant regex found on the most upvoted reponse to this StackOverflow post : https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression.

    *Brief explanation:*

      This pattern allows you to check if the user has entered in the e-mail field an address only with letters, numbers and special characters in the local part : /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*
      
      Or the email can contain alphanumeric and special characters in quotes where control characters such as white space are allowed : |(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")
    
      As well as in the domain part after the symbol "@", only a TLD (top level domain) with one or more dots and letters : (?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?

      Or an IP address containing several digits, periods and letters possibly combined with control characters at a precise level of the string : |\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ 
  
  var emailPattern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (emailPattern.test(typedEmail)) {

    console.log(`The ${typedEmail} is valid.`);
    validationInProgress = true;
    
  } else {

    console.error(`Your email : ${typedEmail}. Do not match the rules of email syntax.`);
    validationInProgress = false;

  }
});


/* 
  Add an event to the event queue which fire when user make some change to the numbers of tournament attended field. When this occures a pattern is used to check if the field contain only digital characters.
 
numbersOfTournament.addEventListener("input" , function(event) {
  var numbersOfTournamentAttended = event.target.value;

  // A pattern for checking if only numbers between 0 and 9 are enter in the "Numbers of tournament attended" field.
  var numbersOfTournamentAttendedPattern = /^\d{1,2}$/g;

  if (numbersOfTournamentAttendedPattern.test(numbersOfTournamentAttended)) {

    console.log("Congrat! you typed only number in this field!");
    validationInProgress = true;
    
  } else {

    console.error("The numbers of tournament field must only contain numbers and nothing more than two of it");
    validationInProgress = false;

  }
});


/* A loop goes through all the radio buttons looking for a checked button. If one button is checked the loop stops and validates the set of fields named "Tournament locations". Else the fieldset is invalid. 
function checkValidityOfRadioButtons() {
  
  var isValid = false;

  for (let location of tournamentLocations) {
    if(!location.checked)
    {

      console.error("the tournament locations fieldset is invalid");
      isValid = false;

    } else {
      
      console.log("the tournament locations fieldset is valid");
      isValid = true;
      break;
    }
  }

  if(isValid) {

    console.log("Une option a été choisie");
    validationInProgress = true;

  } else {

    alert("Vous devez choisir une option.");
    validationInProgress = false;

  }
} */


function validate() {

  /*
   Retrieving fields and set of fields to add a custom data attribute to they
   that will display the error message when one of them does not pass validation process.
  */
  const firstNameField = document.querySelector(".form-data-first-name");
  const lastNameField = document.querySelector(".form-data-last-name");
  const emailField = document.querySelector(".form-data-email");
  const birthdateField = document.querySelector(".form-data-birthdate");
  const numberOfTournamentsField = document.querySelector(".form-data-number-of-tournaments-attended");
  const tournamentLocationsFieldset = document.querySelector(".form-data-tournament-location");
  const termsConditionsAndNewsletterFieldset = document.querySelector(".form-data-terms-conditions-and-newsletter");

  // get all form fields value apart the two last fieldsets (tournament-locations and terms-conditions-and-newsletter)
  var firstNameInputValue = document.getElementById("first-name").value;
  var lastNameInputValue = document.getElementById("last-name").value;
  var emailInputValue = document.getElementById("email").value;
  var birthdateInputValue = document.getElementById("birthdate").value;
  var numberOfTournamentsInputValue = document.getElementById("number-of-tournaments").value;
  var tournamentLocationsInputs = document.getElementsByName("tournament-location");

  // First and last name pattern to check the validity of the associated field
  var namePattern = /^[a-zA-Z]{2,}$/g;

  // email validation Regex found on the input element page, in the section of the email type, of the HTML Living standard specification
  var emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  // Regex who can match only string with number in it and are nothing more than two
  var numberOfTournamentsPattern = /^\d{1,2}$/g;


  // If the First name field does not have at least two characters and does not contain only letters or is empty then display an error message to warn the user that this field has not been validated.
  if(!namePattern.test(firstNameInputValue) && firstNameInputValue.length === 0) {

    firstNameField.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.");
    firstNameField.setAttribute("data-error-visible", "true");

    return false;

  }

  // If the Name field does not have at least two characters and does not contain only letters or is empty then display an error message to warn the user that this field has not been validated.
  if(!namePattern.test(lastNameInputValue) && lastNameInputValue.length === 0) {

    lastNameField.setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    lastNameField.setAttribute("data-error-visible", "true");

    return false;

  }

  // If the Email field does not respect the syntax of a valid email address according to the HTML Living Standard specification or is empty then display an error message to warn the user that this field has not been validated.
  if(!emailPattern.test(emailInputValue) && emailInputValue.length === 0) {

    emailField.setAttribute("data-error", "Vous devez entrer une adresse electronique valide.");
    emailField.setAttribute("data-error-visible", "true");

    return false;

  }

  // If the Birthdate field is empty / has not been filled in, then display an error message to warn the user that this field has not been validated.
  if(birthdateInputValue.length === 0) {

    birthdateField.setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    birthdateField.setAttribute("data-error-visible", "true");
    
    return false;
    
  }

  // If the Number of tournaments field does not contain only numbers or is empty then display an error message to warn the user that this field has not been validated.
  if(!numberOfTournamentsPattern.test(numberOfTournamentsInputValue) && numberOfTournamentsInputValue.length === 0) {

    numberOfTournamentsField.setAttribute("data-error", "Vous devez saisir une valeur numérique");
    numberOfTournamentsField.setAttribute("data-error-visible", "true");

    return false;

  }

  // Go through the list of checkbox buttons naming "tournament-location" to see if there is at least one checked.
  var atLeastOneLocationIsChecked = false;
  for (let location of tournamentLocationsInputs) {

    if(location.checked) {

      atLeastOneLocationIsChecked = true;

    }
  };

  // If no location has been chosen then display an error message to warn the user that this set of fields has not been validated.
  if(!atLeastOneLocationIsChecked) {

    tournamentLocationsFieldset.setAttribute("data-error", "Vous devez choisir une option.");
    tournamentLocationsFieldset.setAttribute("data-error-visible", "true");

    return false;

  }

  // If the terms and conditions checkbox has not been checked then display an error message to warn the user that this field has not been validated.
  if(!document.getElementById("checkbox-terms-and-conditions").checked) {

    termsConditionsAndNewsletterFieldset.setAttribute("data-error", "Vous devez vérifier que vous acceptez les termes et conditions.");
    termsConditionsAndNewsletterFieldset.setAttribute("data-error-visible", "true");

    return false;

  }

  // all the fields have passed validation
  return true;
}


// Brings up the navigation bar on mobile and tablette when the user clicks the hamburger button
function editNav() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {

    x.className += " responsive";

  } else {

    x.className = "topnav";

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

/*
  The function launch the modal: makes it appear in the foreground in front of / above the Hero section and places it below the header.
*/
function launchModal() {
  modalBackground.classList.add("modal-enabled");

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

    Console.error("The modal-enable class could not be removed from the class list of the <aside> tag having the modal-background class");

  }
}