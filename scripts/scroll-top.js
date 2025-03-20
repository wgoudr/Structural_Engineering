const backToTop = document.getElementById('back-to-top');

// Show/hide button based on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});

// Smooth scroll to top
backToTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});