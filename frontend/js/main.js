// ==========================================================================
// Typed.js — hero typing animation (index.html only, guarded so other
// pages that don't have #typed don't throw errors)
// ==========================================================================
if (document.getElementById('typed')) {
  new Typed('#typed', {
    strings: [
      'Aspiring AI Engineer — Machine Learning, LLMs & RAG      ',
      'Researching AI | Building with AI  ',
      'CSE Graduate | Master\'s Student @ SUST  '
    ],
    typeSpeed: 60,
    backSpeed: 15,
    backDelay: 2500,
    loop: true
  });
}

// ==========================================================================
// AOS — scroll animations
// ==========================================================================
if (window.AOS) {
  AOS.init({
    duration: 800,
    once: true
  });
}

// ==========================================================================
// Navbar — background on scroll
// ==========================================================================
const navbar = document.querySelector('.navbar');

function updateNavbarBackground() {
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', updateNavbarBackground);
updateNavbarBackground();

// ==========================================================================
// Navbar — mobile hamburger toggle
// ==========================================================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when a link is tapped (mobile)
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ==========================================================================
// Navbar — active link based on current page
// ==========================================================================
(function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();

// ==========================================================================
// Back to top button
// ==========================================================================
const backToTopBtn = document.querySelector('.back-to-top');

if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ==========================================================================
// Contact form — client-side validation only (no backend yet)
// ==========================================================================
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // TODO: remove once wired to Formspree/backend in Phase 2

    let isValid = true;
    const fields = contactForm.querySelectorAll('[required]');

    fields.forEach((field) => {
      const group = field.closest('.form-group');
      const value = field.value.trim();
      let fieldValid = value.length > 0;

      if (field.type === 'email' && fieldValid) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        fieldValid = emailPattern.test(value);
      }

      if (!fieldValid) {
        isValid = false;
        group.classList.add('error');
      } else {
        group.classList.remove('error');
      }
    });

    const statusEl = contactForm.querySelector('.form-status');

    if (isValid) {
      if (statusEl) {
        statusEl.textContent = 'Thanks! (Form submission will be connected soon — this is a preview.)';
        statusEl.classList.add('visible');
      }
      contactForm.reset();
    } else if (statusEl) {
      statusEl.textContent = 'Please fix the highlighted fields.';
      statusEl.classList.add('visible');
    }
  });
}

// ==========================================================================
// Projects page — category filter
// ==========================================================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.projects-grid .card');

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

