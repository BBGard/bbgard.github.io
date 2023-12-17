
// Create a button element
const returnToTopButton = document.querySelector('.return-to-top');
returnToTopButton.setAttribute('aria-label', 'Return to top of page');
returnToTopButton.setAttribute('id', 'return-to-top');
returnToTopButton.setAttribute('title', 'Return to top of page');

// Show the button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    returnToTopButton.style.display = 'block';
  } else {
    returnToTopButton.style.display = 'none';
  }
});

// Scroll to top when the button is clicked
returnToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
