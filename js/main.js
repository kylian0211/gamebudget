document.addEventListener("DOMContentLoaded", () => {
  // Effet de pulsation du fond
  const bg = document.querySelector(".background-pulse");
  let pulse = 0;
  if (bg) {
    setInterval(() => {
      pulse += 0.03;
      const scale = 1 + Math.sin(pulse) * 0.01;
      bg.style.transform = `scale(${scale})`;
    }, 50);
  }

  // Apparition du slogan
  const slogan = document.querySelector(".slogan");
  if (slogan) {
    slogan.classList.add("visible");
  }

  // Menu responsive (toggle)
  const menuBtn = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav ul");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  // Scroll fluide vers les sections
  document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
