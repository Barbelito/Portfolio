const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#primary-navigation");
const navLinks = document.querySelectorAll("#primary-navigation a");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

document.addEventListener("click", (event) => {
  const isClickInside =
    nav.contains(event.target) || menuToggle.contains(event.target);
  if (!isClickInside && nav.classList.contains("open")) {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", false);
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", false);
    }
  });
});
