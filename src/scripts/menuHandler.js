window.onload = function () {
  'use strict';
  let openClass = 'nav--open';
  let buttonToggle = document.querySelector('.nav__toggle');
  let mainNav = document.querySelector('.nav');
  let setClassToggleMenu = function () {
    mainNav.classList.toggle(openClass);
  }
  buttonToggle.addEventListener('click', setClassToggleMenu)
}();