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
  

 