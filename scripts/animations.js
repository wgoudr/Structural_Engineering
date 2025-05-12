// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Section animations + active nav
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`.nav-links a[href="#${id}"]`);

      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    });
  },
  { threshold: 0.20 } // Trigger when 25% of section is visible
);

// Observe all sections
document.querySelectorAll('.section').forEach((section) => {
  observer.observe(section);
});

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close menu after clicking a link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});



