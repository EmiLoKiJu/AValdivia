import './style.css';

// console.log('loading');

const menuexpanded = document.querySelector('.menuexpanded');
const menubutton = document.querySelector('.menubutton');
const desktopmenucontainer = document.querySelector('.desktopmenucontainer');
let bigwindow = undefined;
const minilogo = document.querySelector('.minilogo');
const logo = document.querySelector('.logo');

menubutton.addEventListener('click', () => {
  menuexpanded.classList.toggle('dnone');
});

function expandmenu() {
  if (window.innerWidth >= 768 && (!bigwindow || bigwindow == undefined)) {
    if (!menuexpanded.classList.contains('dnone')) menuexpanded.classList.toggle('dnone');
    menubutton.classList.toggle('dnone');
    desktopmenucontainer.classList.toggle('dnone');
    minilogo.classList.toggle('dnone');
    logo.classList.toggle('dnone');
    bigwindow = true;
  } else if (window.innerWidth < 768 && (bigwindow || bigwindow == undefined)) {
    menubutton.classList.toggle('dnone');
    desktopmenucontainer.classList.toggle('dnone');
    minilogo.classList.toggle('dnone');
    logo.classList.toggle('dnone');
    bigwindow = false;
  }
}
  
window.addEventListener('resize', expandmenu);

document.addEventListener('DOMContentLoaded', () => {
  expandmenu();
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