


// // JavaScript to handle popup functionality
// let boxes = document.querySelectorAll(".box");
// let closebtn = document.getElementById("closebtn");
// let popup = document.querySelector(".popup");
// let popupHeading = popup.querySelector("h2");
// let popupparagraph=popup.querySelector("p");
// let popupSound = document.getElementById("popupSound");

// let timeout;

// // Show popup when a box is clicked
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     let hiddenText = box.querySelector(".showbtn").textContent; // Get content from hidden <p>
//     let hiddenText1=box.querySelector(".showbtn2").textContent;
//     popupHeading.textContent = hiddenText; // Set dynamic content
//     popupparagraph.textContent=hiddenText1;

//     popup.classList.remove("hide");
//     popup.classList.add("show");
//     popup.style.display = "block"; // Display popup


//     // Play the popup sound
//     popupSound.currentTime = 0; // Reset to start
//     popupSound.play();

//     // Auto-close popup after 5 seconds
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       closePopup();
//     }, 4000);
//   });
// });

// // Close popup when "Close" button is clicked
// closebtn.addEventListener("click", closePopup);

// // Close popup when clicking outside of it
// document.addEventListener("click", (event) => {
//   if (popup.classList.contains("show") && !popup.contains(event.target) && !event.target.closest(".box")) {
//     closePopup();
//   }
// });

// // Close popup function
// function closePopup() {
//   popup.classList.add("hide");
//   setTimeout(() => {
//     popup.style.display = "none";
//     popup.classList.remove("show", "hide");

//   }, 200); // Match fade-out duration
// }
// var cube = document.querySelector('.cube');
// var currentClass = '';

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); // Random number between min (inclusive) and max (exclusive)
// }

// function rollDice() {
//   // Generate a random number between 1 and 6
//   var randNum = getRandomInt(1, 7);

//   // Determine the class to show the face
//   var showClass = 'show-' + randNum;

//   // Remove the current class, if any
//   if (currentClass) {
//     cube.classList.remove(currentClass);
//   }

//   // Add the new class to show the rolled face
//   cube.classList.add(showClass);

//   // Update the current class
//   currentClass = showClass;

//   // Display the rolled number
//   document.getElementById("rolledNumber").textContent = `Rolled Number: ${randNum}`;
// }

// // Add event listener to the cube for touch/click
// cube.addEventListener("click", rollDice);


// // Form Submisionsssssssssssssssssssssssssssssssssssssssssssssssssssss
// const loginBtn = document.getElementById("loginBtn");
// const popupForm = document.getElementById("popupForm");
// const form = document.getElementById("form");

// // Show popup on clicking the login button
// loginBtn.addEventListener("click", () => {
//   popupForm.classList.add("show"); // Add the "show" class
// });

// // Handle form submission
// form.addEventListener("submit", (e) => {
//   e.preventDefault(); // Prevent default form submission behavior
//   popupForm.classList.remove("show"); // Hide the popup
//   loginBtn.style.display = "none"; // Hide the login button
//   alert("Form submitted successfully!");
// });


// JavaScript to handle popup functionality
let boxes = document.querySelectorAll(".box");
let closebtn = document.getElementById("closebtn");
let popup = document.querySelector(".popup");
let popupHeading = popup.querySelector("h2");
let popupparagraph = popup.querySelector("p");
let popupSound = document.getElementById("popupSound");

let timeout;

// Show popup when a box is clicked
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let hiddenText = box.querySelector(".showbtn").textContent; // Get content from hidden <p>
    let hiddenText1 = box.querySelector(".showbtn2").textContent;
    popupHeading.textContent = hiddenText; // Set dynamic content
    popupparagraph.textContent = hiddenText1;

    popup.classList.remove("hide");
    popup.classList.add("show");
    popup.style.display = "block"; // Display popup

    // Play the popup sound
    popupSound.currentTime = 0; // Reset to start
    popupSound.play();

    // Auto-close popup after 5 seconds
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      closePopup();
    }, 4000);
  });
});

// Close popup when "Close" button is clicked
closebtn.addEventListener("click", closePopup);

// Close popup when clicking outside of it
document.addEventListener("click", (event) => {
  if (popup.classList.contains("show") && !popup.contains(event.target) && !event.target.closest(".box")) {
    closePopup();
  }
});

// Close popup function
function closePopup() {
  popup.classList.add("hide");
  setTimeout(() => {
    popup.style.display = "none";
    popup.classList.remove("show", "hide");
  }, 200); // Match fade-out duration
}

// ----------------------- Dice Roll Logic ---------------------------

// Cube and form-related elements
var cube = document.querySelector(".cube");
var currentClass = "";
var formSubmitted = false; // Flag to track form submission

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Random number between min (inclusive) and max (exclusive)
}

function rollDice() {
  if (!formSubmitted) {
    alert("Please fill in the login form before using the die.");
    return; // Prevent further execution if the form is not submitted
  }

  // Generate a random number between 1 and 6
  var randNum = getRandomInt(1, 7);

  // Determine the class to show the face
  var showClass = "show-" + randNum;

  // Remove the current class, if any
  if (currentClass) {
    cube.classList.remove(currentClass);
  }

  // Add the new class to show the rolled face
  cube.classList.add(showClass);

  // Update the current class
  currentClass = showClass;

  // Display the rolled number
  document.getElementById("rolledNumber").textContent = `Rolled Number: ${randNum}`;
}

// Add event listener to the cube for touch/click
cube.addEventListener("click", rollDice);

// ----------------------- Form Submission Logic ---------------------------

const loginBtn = document.getElementById("loginBtn");
const popupForm = document.getElementById("popupForm");
const form = document.getElementById("form");

// Show popup on clicking the login button
loginBtn.addEventListener("click", () => {
  popupForm.classList.add("show"); // Add the "show" class
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  popupForm.classList.remove("show"); // Hide the popup
  loginBtn.style.display = "none"; // Hide the login button
  formSubmitted = true; // Mark the form as submitted
});

$("#form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwuu0OLgOtENX7Thc-2XYgGMK9LcNtpcTgESQruM8rmYQ_BLRCVC-pZY4rRqXjoVyq7/exec",
    data: $("#form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully! Now you can use the die.")
    },
    error: function (err) {
      alert("Something Error")

    }
  })
})