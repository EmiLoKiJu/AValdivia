import './style.css';

// console.log('loading');

const menuexpanded = document.querySelector('.menuexpanded');
const menubutton = document.querySelector('.menubutton');

menubutton.addEventListener('click', () => {
  menuexpanded.classList.toggle('dnone');
});