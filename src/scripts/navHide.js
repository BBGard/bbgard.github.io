/**
 * Hide the navbar when scrolling down and show it when scrolling up
 */

const nav = document.querySelector(".navbar"); // The navbar element
const navHeight = nav.getBoundingClientRect().height; // The height of the navbar
let prevScrollTop = 0; // The previous scroll position

window.addEventListener("scroll", () => {
  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
  if (currentScrollTop > prevScrollTop) {
    // Scrolling down
    if (currentScrollTop > navHeight) {
      nav.classList.add("hide-nav");
    }
  } else {
    // Scrolling up
    nav.classList.remove("hide-nav");
  }
  prevScrollTop = currentScrollTop;
});
