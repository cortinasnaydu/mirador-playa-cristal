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

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
