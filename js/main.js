'use strict';

let switchTheme = document.querySelector('.switch__theme');
let darkBody = document.querySelector('html');
let darkStatistic = document.querySelector('.desc-black');


let mainBackground = document.querySelector('.main');
let url = "../img/first-screen-background-black.png";

switchTheme.addEventListener('click', function () {
  darkBody.classList.toggle('dark_body');
  darkStatistic.classList.toggle('dark-bckgrn');

  // mainBackground.classList.toggle('bckgrn_main');
  // mainBackground.style.backgroundImage = `url(${url})`;

})

let readMore = document.querySelector('.rightbar__text_readmore');
let secondPrgph = document.querySelector('.rightbar__text_secondparagraph');

readMore.addEventListener('click', function () {
  readMore.style.display = 'none';
  secondPrgph.style.display = 'block';
})

let burgerIcon = document.querySelector('.header__burger-icon');
let burgerMenu = document.querySelector('.header__list');
let addMarginMain = document.querySelector('.block-title');

burgerIcon.addEventListener('click', function () {
  burgerIcon.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  addMarginMain.classList.toggle('active');
  darkBody.classList.toggle('lock');
})

