// scripts/main.js

document.addEventListener("DOMContentLoaded", () => {
    // Effet de pulsation du fond
    const bg = document.querySelector(".background-pulse");
    let pulse = 0;
    setInterval(() => {
      pulse += 0.03;
      const scale = 1 + Math.sin(pulse) * 0.01;
      if (bg) bg.style.transform = `scale(${scale})`;
    }, 50);
  
    // Animation du texte d'accroche
    const slogan = document.querySelector(".slogan");
    if (slogan) {
      slogan.classList.add("visible");
    }
  
    // Menu mobile toggle
    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
      });
    }
  
    // Scroll fluide vers les sections
    document.querySelectorAll("a[href^='#']").forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });
  