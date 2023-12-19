/**
 * This file contains all the code for the buttons on the page
 * (e.g. the "Next" buttons)
 */

// Find all the .btn-next elements and add a click event listener to them
const nextButtons = document.querySelectorAll(".next-btn");

nextButtons.forEach((button) => {

  button.addEventListener("click", () => {
    // Disable default behaviour
    event.preventDefault();
    // Find the next project-section element
    const nextElement = button.closest("section").nextElementSibling;
    // Scroll to the next element
    nextElement.scrollIntoView({ behavior: "smooth" });
  });
});
