import './style.css';
import changeSlide from './modules/slider.js';

const menuexpanded = document.querySelector('.menuexpanded');
const menubutton = document.querySelector('.menubutton');
const desktopmenucontainer = document.querySelector('.desktopmenucontainer');
const minilogo = document.querySelector('.minilogo');
const logo = document.querySelector('.logo');
let bigwindow; // helps with logic with expandmenu function
const divservicios = document.querySelector('.divservicios');
const arrowservicios = document.querySelector('.arrowservicios');
const itemservicios = document.querySelector('.itemservicios');
const servicioscontainer = document.querySelector('.servicioscontainer');
const desktopsocialmediacontainer = document.querySelector('.desktopsocialmediacontainer');

// sliders

let slideIndex = 1;
const slides = document.getElementsByClassName('slide');
const nextbutton = document.querySelector('.next');
const prevbutton = document.querySelector('.prev');

prevbutton.addEventListener('click', () => {
  slideIndex = changeSlide(slideIndex, -1, slides, 1);
});
nextbutton.addEventListener('click', () => {
  slideIndex = changeSlide(slideIndex, 1, slides, 1);
});

let slideIndex2 = 1;
let slides2 = document.getElementsByClassName('slide2');

const nextbutton2 = document.querySelector('.next2');
const prevbutton2 = document.querySelector('.prev2');

prevbutton2.addEventListener('click', () => {
  const slidestoshow = bigwindow ? 6 : 1;
  slideIndex2 = changeSlide(slideIndex2, -1, slides2, slidestoshow);
});
nextbutton2.addEventListener('click', () => {
  const slidestoshow = bigwindow ? 6 : 1;
  slideIndex2 = changeSlide(slideIndex2, 1, slides2, slidestoshow);
});

// adjust navbar depending on window size

function expandmenu() {
  if ((window.innerWidth >= 768 && !bigwindow) || 
  (window.innerWidth >= 768 && bigwindow == undefined)) {
    if (!menuexpanded.classList.contains('dnone')) menuexpanded.classList.toggle('dnone');
    if (!divservicios.classList.contains('dnone')) {
      divservicios.classList.replace('dflex', 'dnone');
    }
    if (arrowservicios.classList.contains('rotate90')) arrowservicios.classList.toggle('rotate90');
    if (!menubutton.classList.contains('dnone')) menubutton.classList.toggle('dnone');
    if (desktopmenucontainer.classList.contains('dnone')) {
      desktopmenucontainer.classList.toggle('dnone');
    }
    if (!minilogo.classList.contains('dnone')) minilogo.classList.toggle('dnone');
    if (logo.classList.contains('dnone')) logo.classList.toggle('dnone');
    if (desktopsocialmediacontainer.classList.contains('dnone')) {
      desktopsocialmediacontainer.classList.toggle('dnone');
    }
    bigwindow = true;
    slideIndex2 = changeSlide(slideIndex2 + 1, -1, slides2, 6);
  } else if ((window.innerWidth < 768 && bigwindow) || 
  (window.innerWidth < 768 && bigwindow == undefined)) {
    if (menubutton.classList.contains('dnone')) menubutton.classList.toggle('dnone');
    if (!desktopmenucontainer.classList.contains('dnone')) {
      desktopmenucontainer.classList.toggle('dnone');
    }
    if (minilogo.classList.contains('dnone')) minilogo.classList.toggle('dnone');
    if (!logo.classList.contains('dnone')) logo.classList.toggle('dnone');
    if (!desktopsocialmediacontainer.classList.contains('dnone')) {
      desktopsocialmediacontainer.classList.toggle('dnone');
    }
    bigwindow = false;
    slideIndex2 = changeSlide(slideIndex2 +1, -1, slides2, 1);
  }
}

// date and time

const datetime = document.querySelector('.dateandtime');

function updateTime() {
  const date = new Date();
  const options = {
    month: 'long',
    year: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-US', options).replace(' at', ',');
  datetime.innerHTML = formattedDate;
}

setInterval(updateTime, 1000);

// menu

menubutton.addEventListener('click', () => {
  menuexpanded.classList.toggle('dnone');
});

arrowservicios.addEventListener('click', () => {
  if (divservicios.classList.contains('dnone')) divservicios.classList.replace('dnone', 'dflex');
  else divservicios.classList.replace('dflex', 'dnone');
  arrowservicios.classList.toggle('rotate90');
});

// navbar desktop

itemservicios.addEventListener('mouseenter', () => {
  servicioscontainer.classList.toggle('dnone');
});

itemservicios.addEventListener('mouseleave', (e) => {
  if (!e.relatedTarget.closest('.servicioscontainer')) {
    servicioscontainer.classList.add('dnone');
  }
});

servicioscontainer.addEventListener('mouseleave', () => {
  servicioscontainer.classList.add('dnone');
});

// document loaded

window.addEventListener('resize', expandmenu);

document.addEventListener('DOMContentLoaded', () => {
  expandmenu();
  slideIndex = changeSlide(slideIndex, -1, slides, 1);
  let slidestoshow = bigwindow ? 6 : 1;
  slideIndex2 = changeSlide(slideIndex2, -1, slides2, slidestoshow);
});