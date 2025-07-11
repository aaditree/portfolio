document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  let scrollSpeed = 0.3;
  let scrollPos = 0;

  const cloneCarouselItems = () => {
    const cards = Array.from(carousel.children);
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      carousel.appendChild(clone);
    });
  };

  cloneCarouselItems();

  function smoothScroll() {
    scrollPos += scrollSpeed;
    if (scrollPos >= carousel.scrollWidth / 2) {
      scrollPos = 0;
    }
    carousel.scrollLeft = scrollPos;
    requestAnimationFrame(smoothScroll);
  }

  smoothScroll();
  });
