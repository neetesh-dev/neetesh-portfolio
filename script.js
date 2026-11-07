// Add your public contact email below before publishing.
const CONTACT_EMAIL = "your-email@example.com";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const emailLink = document.getElementById("emailLink");
if (emailLink && CONTACT_EMAIL !== "your-email@example.com") {
  emailLink.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Website Project Enquiry")}`;
}

// Reveal sections gently as they enter the screen.
const revealTargets = document.querySelectorAll(
  ".service-card, .project-card, .about-art, .about-copy, .contact-panel"
);
revealTargets.forEach((item) => item.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((item) => observer.observe(item));
} else {
  revealTargets.forEach((item) => item.classList.add("visible"));
}
