
// Create a button element
const returnToTopButton = document.querySelector('.return-to-top');
returnToTopButton.setAttribute('aria-label', 'Return to top of page');
returnToTopButton.setAttribute('id', 'return-to-top');
returnToTopButton.setAttribute('title', 'Return to top of page');

console.log("loaded");
console.log("retrun to top button", returnToTopButton);

//print button classes
console.log("button classes", returnToTopButton.classList);

// Show the button when scrolling down
window.addEventListener('scroll', () => {
  console.log("scroll");
  if (window.scrollY > 100) {
    console.log("scolling down");
    // returnToTopButton.style.display = 'block'
    returnToTopButton.classList.remove('hidden');
    ;
  } else {
    // returnToTopButton.style.display = 'none';
    returnToTopButton.classList.add('hidden');
  }
});

// Scroll to top when the button is clicked
returnToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
