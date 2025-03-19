function toggleMenu(){
const menu = document.querySelector('.menu-links');
const icon = document.querySelector('.hamburger-icon');
menu.classList.toggle("open");
icon.classList.toggle("open");
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
  
const openBtn = document.getElementById ("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById ("modal" );

openBtn.addEventListener("click", () => {
modal.classList.add ("open");
});

closeBtn.addEventListener("click", () => {
modal.classList.remove("open");
});
  