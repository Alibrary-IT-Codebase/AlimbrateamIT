// ─── Scroll-triggered card reveal ─────────────────────────────────────────
const OBSERVED_SELECTOR =
  ".hero-card, .service-card, .project-card, .profile-card, .stats-card, .contact-card, .stat-card-new";

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      scrollObserver.unobserve(entry.target);
    });
  },
  { rootMargin: "0px", threshold: 0.15 },
);

document.querySelectorAll(OBSERVED_SELECTOR).forEach((item) => {
  const siblings = Array.from(
    item.parentElement.querySelectorAll(OBSERVED_SELECTOR),
  );
  const index = siblings.indexOf(item);
  item.style.transitionDelay = `${index * 80}ms`;
  scrollObserver.observe(item);
});

const heroTitle = document.querySelector(".hero h1");
const heroCopyEls = document.querySelectorAll(
  ".hero-copy p, .hero-copy .eyebrow",
);

requestAnimationFrame(() => {
  heroTitle?.classList.add("visible");
  heroCopyEls.forEach((el, i) => {
    setTimeout(() => el.classList.add("visible"), i * 100);
  });
});

// ─── Button radial-gradient mouse follow ───────────────────────────────────
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousemove", ({ clientX }) => {
    const { left } = btn.getBoundingClientRect();
    btn.style.setProperty("--mouse-x", `${clientX - left}px`);
  });
});

// ─── Header shadow on scroll ───────────────────────────────────────────────
const header = document.querySelector(".site-header");

const handleScroll = () => {
  header?.classList.toggle("scrolled", window.scrollY > 20);
};

window.addEventListener("scroll", handleScroll, { passive: true });
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" },
);

sections.forEach((section) => navObserver.observe(section));
