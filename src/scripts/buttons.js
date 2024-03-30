/**
 * This file contains all the code for the buttons on the page
 * (e.g. the "Next" buttons)
 */

// Smooth scroll function
function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
  }, 10);
}

// Find all the .btn-next elements and add a click event listener to them
const nextButtons = document.querySelectorAll(".next-btn");

nextButtons.forEach((button) => {

  button.addEventListener("click", (event) => {
    // Disable default behaviour
    event.preventDefault();

    // Add the "hidden" class to the current section
    button.closest("section").classList.add("hidden");

    // Find the next project-section element
    let nextElement = button.closest("section").nextElementSibling;

    if(nextElement === null) {
      // Find the element with id="all-projects"
      nextElement = document.querySelector("#all-projects");
    }

    // Remove the "hidden" class from the next section
    nextElement.classList.remove("hidden");
    // Scroll to the next element
    nextElement.scrollIntoView({ behavior: "smooth" });



  });
});

// Find all the .btn-prev elements and add a click event listener to them
const prevButtons = document.querySelectorAll(".prev-btn");

prevButtons.forEach((button) => {

    button.addEventListener("click", (event) => {
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


  // Find all buttons with the class "scroll-btn" and add a click event listener to them
const scrollButtons = document.querySelectorAll(".scroll-btn");

scrollButtons.forEach((button) => {

    button.addEventListener("click", (event) => {
      // Disable default behaviour
      event.preventDefault();

      // Get the link from the button
      const link = button.getAttribute("href");

      // Find the element with the id that matches the link
      const element = document.querySelector(link);

      // Scroll to the element slowly
      // element.scrollIntoView({ behavior: "smooth" });
      scrollTo(document.documentElement, element.offsetTop, 600);

    });
  }
);


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
