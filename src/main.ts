import './style.css';

const currentYearEl = document.querySelector('#current-year');

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear().toString();
}

let lightMode = true;

function toggleColorMode() {
  if (lightMode) {
    document.body.style.background = 'var(--background-color-dark)';
    document.body.style.color = 'var(--text-color-dark)';
  } else {
    document.body.style.background = 'var(--background-color-light)';
    document.body.style.color = 'var(--text-color-light)';
  }

  lightMode = !lightMode;
}

const cardImageEl = document.querySelector('.card__image');

if (cardImageEl) {
  cardImageEl.addEventListener('click', toggleColorMode);
}
