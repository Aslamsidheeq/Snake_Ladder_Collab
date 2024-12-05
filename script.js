
var popup_login = document.getElementById('popup_form');
var close = document.getElementById('close_btn');

window.addEventListener("load", function () {

  setTimeout(function () {

    popup_login.classList.add('anyname');

  }, 1000) // 1 secon is 1000ms so 5 second is = to 5000ms.


}) // 5 second popup are working count our time and check it now 
// create close btn event
close.addEventListener("click", function () {
  popup_login.classList.remove('anyname');
  closePopuptwo()
}) //friends create 5 second popup form you are check for pouse video check the and after i am close btn is work properly 
// now add transition

function closePopuptwo() {
  popup_login.classList.add("hide");
  setTimeout(() => {
    popup_login.style.display = "none";
    popup_login.classList.remove("show", "hide");
  }, 200); // Match fade-out duration
}

$("#form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwuu0OLgOtENX7Thc-2XYgGMK9LcNtpcTgESQruM8rmYQ_BLRCVC-pZY4rRqXjoVyq7/exec",
    data: $("#form").serialize(),
    method: "post",
    success: function (response) {
      alert("Form submitted successfully! Now you can use the die.")
      window.location.href = "index.html";
    },
    error: function (err) {
      alert("Something Error")

    }
  })
})


// JavaScript to handle popup functionality
let boxes = document.querySelectorAll(".box");
let closebtn = document.getElementById("closebtn");
let popup = document.querySelector(".popup");
let popupHeading = popup.querySelector("h2");
let popupparagraph = popup.querySelector("p");
let popupSound = document.getElementById("popupSound");
let rollsound = document.getElementById("RolllSound");

let rollingSound = new Audio('rollSound.mp3')
let winSound = new Audio('winSound.mp3')

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
    // clearTimeout(timeout);
    // timeout = setTimeout(() => {
    //   closePopup();
    // }, 4000);
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


// Cube and form-related elements
var cube = document.querySelector(".cube");
var currentClass = "";
var formSubmitted = false; // Flag to track form submission

// Get a random integer between min and max (inclusive of min, exclusive of max)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // Random number between min (inclusive) and max (exclusive)
}

function rollDice() {
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

  // Move the element with id "p1" to the corresponding box based on randNum
  moveElementToBox(randNum);
}
let r = 0; // Running total for the current box index
let previousTarget = null; // To store the ID of the previous target box

function moveElementToBox(randNum) {
  const maxBoxes = 100; // Assuming there are 100 boxes (b01 to b100)

  // Check if the next roll lands exactly on or overshoots b100
  if (r + randNum > maxBoxes) {
    console.log(
      `Overshot! Current position: ${r}, rolled: ${randNum}. Waiting for the exact roll to reach b100.`
    );
    return; // Stop processing this roll
  }

  // Increment `r` by `randNum`
  r += randNum;


  if (previousTarget === "b05") {
    r = 17;
  } else if (previousTarget === "b07") {
    r = 27;
  } else if (previousTarget === "b11") {
    r = 1;
  } else if (previousTarget === "b17") {
    r = 68;
  } else if (previousTarget === "b24") {
    r = 16;
  } else if (previousTarget === "b33") {
    r = 12;
  } else if (previousTarget === "b26") {
    r = 35;
  } else if (previousTarget === "b35") {
    r = 45;
  } else if (previousTarget === "b39") {
    r = 22;
  } else if (previousTarget === "b43") {
    r = 37;
  } else if (previousTarget === "b49") {
    r = 32;
  } else if (previousTarget === "b54") {
    r = 16;
  } else if (previousTarget === "b55") {
    r = 65;
  } else if (previousTarget === "b63") {
    r = 52;
  } else if (previousTarget === "b73") {
    r = 64;
  } else if (previousTarget === "b75") {
    r = 85;
  } else if (previousTarget === "b79") {
    r = 62;
  } else if (previousTarget === "b83") {
    r = 71;
  } else if (previousTarget === "b86") {
    r = 95;
  } else if (previousTarget === "b89") {
    r = 74;
  } else if (previousTarget === "b94") {
    r = 90;
  } else if (previousTarget === "b99") {
    r = 1;
  }

  // Find the target box based on the updated `r`
  const targetBox = document.getElementById("b" + String(r).padStart(2, "0"));

  if (targetBox) {
    // Move the element to the target box
    const p1Element = document.getElementById("p1");

    // Calculate the target position relative to the target box
    const boxRect = targetBox.getBoundingClientRect();

    // Move p1Element to the target position
    p1Element.style.top = boxRect.top + 10 + window.scrollY + "px"; // Account for page scroll
    p1Element.style.left = boxRect.left + 30 + window.scrollX + "px"; // Account for page scroll

    // Add a transition for smooth movement
    p1Element.style.transition = "top 1.5s, left 1.5s";

    // Update the content of the <p class="idnumber"> to display the current box ID
    //const idNumberElement = document.querySelector(".idnumber");
    //idNumberElement.textContent = `Current Box ID: ${targetBox.id}`;

    // Check if the targetBox ID is "b100" (win condition)
    if (targetBox.id === "b100") {
      alert("Win!");
    }

    // Update `previousTarget` for the next roll
    previousTarget = targetBox.id;

    // Show popup after 1 second delay
    setTimeout(() => {
      // Get dynamic content for the popup (customized for each target box)
      let hiddenText = targetBox.querySelector(".showbtn").textContent;
      let hiddenText1 = targetBox.querySelector(".showbtn2").textContent;

      // Set the content of the popup dynamically
      popupHeading.textContent = hiddenText;
      popupparagraph.textContent = hiddenText1;

      // Show the popup
      popup.classList.remove("hide");
      popup.classList.add("show");
      popup.style.display = "block";

      // Play the popup sound
      popupSound.currentTime = 0; // Reset to start
      popupSound.play();

      // Auto-close popup after 5 seconds
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        closePopup();
      }, 4000);
    }, 1000); // Popup will show after 1 second
  } else {
    console.error("Target box not found for ID: " + r);
  }
}

// Add event listener to the cube for touch/click
cube.addEventListener("click", rollDice);



/////sssssssssssssssssssssssssssssssssssss

//----------------------- Form Submission Logic ---------------------------

const loginBtn = document.getElementById("loginBtn");
const popupForm = document.getElementById("popupForm");
const form = document.getElementById("form");

// Show popup on clicking the login button


// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  popupForm.classList.remove("show"); // Hide the popup
  loginBtn.style.display = "none"; // Hide the login button
  formSubmitted = true; // Mark the form as submitted
});

