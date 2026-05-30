function setLanguage(lang) {

  document.querySelectorAll('.lang-es').forEach(el => {
    el.style.display = lang === 'es' ? '' : 'none';
  });

  document.querySelectorAll('.lang-en').forEach(el => {
    el.style.display = lang === 'en' ? '' : 'none';
  });

  localStorage.setItem('language', lang);
}

const savedLanguage =
  localStorage.getItem('language') || 'es';

setLanguage(savedLanguage);

document.querySelectorAll(".year").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

const photoSlider = new Swiper(".photo-slider", {
  loop: true,
  spaceBetween: 18,
  speed: 1200,
  autoplay: {
    delay: 2800,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
