'use strict'

//header

const menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});



window.onscroll = function() {toStickHeader()};

const header = document.getElementById("nav-header");
let sticky = header.offsetTop;

function toStickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};