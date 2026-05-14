const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.18,
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      scrollObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const animatedItems = document.querySelectorAll('.hero-card, .service-card, .profile-card, .stats-card, .contact-card');
animatedItems.forEach((item, index) => {
  item.style.transitionDelay = `${index * 80}ms`;
  scrollObserver.observe(item);
});

const heroTitle = document.querySelector('.hero h1');
const heroCopy = document.querySelector('.hero-copy p');
if (heroTitle && heroCopy) {
  heroTitle.classList.add('visible');
  heroCopy.classList.add('visible');
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    button.style.setProperty('--mouse-x', `${x}px`);
  });
});
