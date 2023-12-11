
// Menu
document.querySelector('.hamburger').addEventListener('click', () => {
  // Toggle the expanded class on the nav-links
  document.querySelector('.nav-links').classList.toggle('expanded');

  // Toggle the is-active class on the hamburger
  document.querySelector('.hamburger').classList.toggle('is-active');

  // Toggle the no-scroll class on the body
  document.querySelector('body').classList.toggle('no-scroll');
});

// Add alistener to nav-links to close the menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    // Remove the expanded class from the nav-links
    document.querySelector('.nav-links').classList.remove('expanded');

    // Remove the is-active class from the hamburger
    document.querySelector('.hamburger').classList.remove('is-active');

    // Remove the no-scroll class from the body
    document.querySelector('body').classList.remove('no-scroll');
  });
});
