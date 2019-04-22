
import Typed from 'typed.js';
require('./style.css');
require('./index.html');

  // PARALLAX EFFECT
  const parallax = document.getElementById('welcome-section');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallax.style.backgroundPositionY = scrolled * 0.7+"px";
  });

  // TYPED EFFECT
  setTimeout(() => {
    var typed = new Typed('#description', {
        strings: ['Développement Web', 'Fullstack Javascript'],
        typeSpeed: 80,
        backSpeed: 1500,
        fadeOut: true,
        loop: false,
        cursorChar: "",
      });
  }, 2000);
