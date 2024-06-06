document.addEventListener("DOMContentLoaded", function() {
    const bookButtons = document.querySelectorAll(".book-button");
    const popupForm = document.getElementById("popupForm");
    const overlay = document.getElementById("overlay");
  
    bookButtons.forEach(button => {
      button.addEventListener("click", function() {
        popupForm.style.display = "block";
        overlay.style.display = "block";
      });
    });
  
    overlay.addEventListener("click", function() {
      popupForm.style.display = "none";
      overlay.style.display = "none";
    });
  
    const bookingForm = document.getElementById("bookingForm");
    bookingForm.addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("Form submitted!");
      popupForm.style.display = "none";
      overlay.style.display = "none";
    });
  });
  