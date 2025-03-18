function toggleMenu(){
const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');
menu.classList.toggle("open");
icon.classList.toggle("open");
}

window.onload = function() {
    window.history.replaceState({}, document.title, window.location.pathname);
    window.scrollTo(0, 0);
  }


  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  
  window.addEventListener("scroll", () => {
      let current = "";
  
      sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
          }
      });
  
      navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${current}`) {
              link.classList.add("active");
          }
      });
  });
  
  