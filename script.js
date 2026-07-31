const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = document.querySelector('.toggle-icon');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');

const textArray = [
  'Web Developer',
  'Python Enthusiast',
  'IT Student',
  'Creative Problem Solver'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingText = document.querySelector('.typing-text');

function typeLoop() {
  const currentText = textArray[textIndex];

  if (!isDeleting) {
    charIndex++;
    typingText.textContent = currentText.slice(0, charIndex);

    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1200);
      return;
    }
  } else {
    charIndex--;
    typingText.textContent = currentText.slice(0, charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }
  }

  const speed = isDeleting ? 60 : 110;
  setTimeout(typeLoop, speed);
}

const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => revealObserver.observe(item));

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);
  toggleIcon.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  setTheme('light');
} else {
  setTheme('dark');
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.contains('light-theme');
  setTheme(isLight ? 'dark' : 'light');
});

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navMenu.classList.remove('open'));
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();

  if (name) {
    alert(`Thank you, ${name}! Your message has been submitted.`);
    contactForm.reset();
  }
});

typeLoop();
