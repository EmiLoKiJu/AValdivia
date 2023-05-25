// import './style.css';

// console.log('loading');

const menuexpanded = document.querySelector('.menuexpanded');
const menubutton = document.querySelector('.menubutton');
const desktopmenucontainer = document.querySelector('.desktopmenucontainer');
const minilogo = document.querySelector('.minilogo');
const logo = document.querySelector('.logo');
let bigwindow = undefined; //helps with logic with expandmenu function
const divservicios = document.querySelector('.divservicios');
const arrowservicios = document.querySelector('.arrowservicios');
const itemservicios = document.querySelector('.itemservicios');
const servicioscontainer = document.querySelector('.servicioscontainer');
const desktopsocialmediacontainer = document.querySelector('.desktopsocialmediacontainer');



// adjust navbar depending on window size

function expandmenu() {
  if ((window.innerWidth >= 768 && !bigwindow) || (window.innerWidth >= 768 && bigwindow == undefined)) {
    if (!menuexpanded.classList.contains('dnone')) menuexpanded.classList.toggle('dnone');
    if (!divservicios.classList.contains('dnone')) divservicios.classList.replace('dflex', 'dnone');
    if (arrowservicios.classList.contains('rotate90')) arrowservicios.classList.toggle('rotate90');
    if (!menubutton.classList.contains('dnone')) menubutton.classList.toggle('dnone');
    if (desktopmenucontainer.classList.contains('dnone')) desktopmenucontainer.classList.toggle('dnone');
    if (!minilogo.classList.contains('dnone')) minilogo.classList.toggle('dnone');
    if (logo.classList.contains('dnone')) logo.classList.toggle('dnone');
    if (desktopsocialmediacontainer.classList.contains('dnone')) desktopsocialmediacontainer.classList.toggle('dnone');
    bigwindow = true;
  } else if ((window.innerWidth < 768 && bigwindow) || (window.innerWidth < 768 && bigwindow == undefined)) {
    if (menubutton.classList.contains('dnone')) menubutton.classList.toggle('dnone');
    if (!desktopmenucontainer.classList.contains('dnone')) desktopmenucontainer.classList.toggle('dnone');
    if (minilogo.classList.contains('dnone')) minilogo.classList.toggle('dnone');
    if (!logo.classList.contains('dnone')) logo.classList.toggle('dnone');
    if (!desktopsocialmediacontainer.classList.contains('dnone')) desktopsocialmediacontainer.classList.toggle('dnone');
    bigwindow = false;
  }
}
  
window.addEventListener('resize', expandmenu);

document.addEventListener('DOMContentLoaded', () => {
  expandmenu();
  changeSlide(0);
  showSlide(slideIndex);
});

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

// slider images

function showSlide(index) {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // Show the selected slide
  slides[index].classList.add("active");
}

let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
const nextbutton = document.querySelector('.next');
const prevbutton = document.querySelector('.prev');
prevbutton.addEventListener('click', () => {
  changeSlide(-1);
});
nextbutton.addEventListener('click', () => {
  changeSlide(1);
});

function changeSlide(n) {
  slideIndex += n;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  showSlide(slideIndex);
}

// Show the initial slide
