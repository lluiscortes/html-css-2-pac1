/**
 * Import dependencies from node_modules
 */

import '@fortawesome/fontawesome-free/js/all.js';
import Typewriter from 'typewriter-effect/dist/core';
import Headroom from 'headroom.js';
import AOS from 'aos';


/**
 * Write any other JavaScript below
 */

// Typewritter
new Typewriter('.hero__subheading', {
  strings: ['Web Development', 'Graphic Design', 'Digital Marketing'],
  autoStart: true,
  loop: true,
});

// AOS
AOS.init({
  duration: 1200
});

// Preloader
window.onload = () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.classList.remove('preloader--show');
  }, 500);
}

// Smooth scroll
const links = document.querySelectorAll('a');
for (const link of links) {
  link.addEventListener('click', clickHandler);
}
function clickHandler(e) {
  const href = this.getAttribute('href');
  if (href.substr(0, 1) !== '#') return;
  e.preventDefault();
  const offsetTop = document.querySelector(href).offsetTop;
  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}

// Header behavior
const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.getElementsByClassName('navbar__link');
const openMenu = () => {
  navbar.classList.add('navbar--show');
  toggle.classList.add('toggle--close');
}
const closeMenu = () => {
  navbar.classList.remove('navbar--show');
  toggle.classList.remove('toggle--close');
}
const toggleMenu = () => {
  if (navbar.classList.contains('navbar--show')) {
    closeMenu();
  } else {
    openMenu();
  }
}
toggle.addEventListener('click', toggleMenu);
for (var i = 0, len = navLinks.length; i < len; i++) {
  navLinks[i].addEventListener('click', closeMenu);
}
