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

    // Add the "hidden" class to the current section
    button.closest("section").classList.add("hidden");

    // Find the next project-section element
    const nextElement = button.closest("section").nextElementSibling;
    // Remove the "hidden" class from the next section
    nextElement.classList.remove("hidden");
    // Scroll to the next element
    nextElement.scrollIntoView({ behavior: "smooth" });



  });
});

// Find all the .btn-prev elements and add a click event listener to them
const prevButtons = document.querySelectorAll(".prev-btn");

prevButtons.forEach((button) => {

    button.addEventListener("click", () => {
      // Disable default behaviour
      event.preventDefault();

      // Add the "hidden" class to the current section
      button.closest("section").classList.add("hidden");

      // Find the previous project-section element
      const prevElement = button.closest("section").previousElementSibling;
      // Remove the "hidden" class from the previous section
      prevElement.classList.remove("hidden");
      // Scroll to the previous element
      prevElement.scrollIntoView({ behavior: "smooth" });
    });
  });


// const nextButtons = document.querySelectorAll(".next-btn");

// nextButtons.forEach((button) => {

//   button.addEventListener("click", () => {
//     // Disable default behaviour
//     event.preventDefault();
//     // Find the next project-section element
//     const nextElement = button.closest("section").nextElementSibling;
//     // Scroll to the next element
//     nextElement.scrollIntoView({ behavior: "smooth" });
//   });
// });
