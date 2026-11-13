// ========================================================================
// main.js — the only JavaScript on the site. It does two small things.
// ========================================================================


// ---- 1. NAV BAR -------------------------------------------------------
// At the very top the nav is see-through (like your design).
// Once you scroll down a little, we add the class "scrolled", and the CSS
// turns the nav white so the text stays readable over the page.

const nav = document.getElementById("nav");

function updateNav() {
  // window.scrollY = how many pixels you have scrolled down
  nav.classList.toggle("scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateNav);  // run it every time you scroll
updateNav();                                   // and once right now


// ---- 2. POP-UP ANIMATION ---------------------------------------------
// Every element with class "reveal" (the experience entries and the project
// cards) starts hidden. An IntersectionObserver is the browser's way of
// asking "tell me when this element enters the screen".
// When it does, we add the class "visible" and the CSS animates it in.

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  function (entries) {
    let delay = 0;   // if several appear at once, they pop in one after another

    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = delay + "s";
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);   // only animate once
        delay += 0.15;
      }
    });
  },
  {
    threshold: 0.2,                  // wait until 20% of it is on screen
    rootMargin: "0px 0px -8% 0px"    // ...and a little above the bottom edge
  }
);

revealItems.forEach(function (item) {
  observer.observe(item);
});
