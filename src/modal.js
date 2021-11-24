function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".modal-background"); // Changed the modal background class name for one more explicit
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".form-data"); // Changed the modal form data class name for one more explicit

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


