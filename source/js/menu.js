'use strict';
// мобильное меню - начиная с планшетной версии
(function () {
  var header = document.querySelector('.header');
  var toggle = document.querySelector('.header__toggle');
  var body = document.querySelector('body');

  if (header && toggle) {
    header.classList.remove('header--nojs');

    toggle.addEventListener('click', function () {
      if (header.classList.contains('header--closed')) {
        header.classList.remove('header--closed');
        header.classList.add('header--opened');
        body.classList.add('body_opened-header');
      } else {
        header.classList.add('header--closed');
        header.classList.remove('header--opened');
        body.classList.remove('body_opened-header');
      }
    });
  }
})();
