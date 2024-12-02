


// JavaScript to handle popup functionality
let boxes = document.querySelectorAll(".box");
let closebtn = document.getElementById("closebtn");
let popup = document.querySelector(".popup");
let popupHeading = popup.querySelector("h2");
let popupSound = document.getElementById("popupSound");

let timeout;

// Show popup when a box is clicked
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let hiddenText = box.querySelector(".showbtn").textContent; // Get content from hidden <p>
    popupHeading.textContent = hiddenText; // Set dynamic content

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

function rollDice() {
  // Generate a random number between 1 and 6
  var randNum = getRandomInt(1, 7);

  // Determine the class to show the face
  var showClass = 'show-' + randNum;

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


