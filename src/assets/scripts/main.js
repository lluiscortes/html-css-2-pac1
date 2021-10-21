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
  strings: ['Web Developer', 'Graphic Designer', 'Digital Marketer'],
  autoStart: true,
  loop: true,
});

// Headroom
const header = document.querySelector('.header');
const headroom = new Headroom(header);
headroom.init();

// AOS
AOS.init({
  duration: 1200
});
