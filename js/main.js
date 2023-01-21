'use strict';

// Black-white mode ===========================================

let switchTheme = document.querySelector('.switch__theme');
let darkBody = document.querySelector('html');
let darkStatistic = document.querySelectorAll('.desc-black');
let darkBckgr = document.querySelector('.main');

switchTheme.addEventListener('click', function () {
  darkBody.classList.toggle('dark_body');
  darkBckgr.classList.toggle('dark');

  for( let i = 0; i < darkStatistic.length; i++){
  darkStatistic[i].classList.toggle('dark-bckgrn');
  } 
})

// Readmore =============================================

let readMore = document.querySelector('.rightbar__text_readmore');
let secondPrgph = document.querySelector('.rightbar__text_secondparagraph');

readMore.addEventListener('click', function () {
  readMore.style.display = 'none';
  secondPrgph.style.display = 'block';
})

// Burger Menu=======================================================

let burgerIcon = document.querySelector('.header__burger-icon');
let burgerMenu = document.querySelector('.header__list');
let opacityBurger = document.querySelector('.header__list');

console.log(opacityBurger);
console.log(burgerIcon);

burgerIcon.addEventListener('click', function () {
  burgerIcon.classList.toggle('active');
  burgerMenu.classList.toggle('active');
  darkBody.classList.toggle('lock');
  opacityBurger.style.opacity = 0.95;

})

// Exchange block =================================

let valueInpt = document.querySelector('#pay');
let recieve = document.querySelector('#recieve');
let rate = 127.49;

valueInpt.addEventListener('input', function () {

  let recieveResult = valueInpt.value * rate;

  recieve.innerHTML = `${recieveResult.toFixed(1)}`;

  if (valueInpt.value > 1000) {
    let txt = "";
    txt = "Value is to large";
    document.getElementById("demo").innerHTML = txt;
  } else if (valueInpt.value < 1000) {
    document.getElementById("demo").innerHTML = '';
  }
})

// Send Request =======================================

let sendRequest = document.querySelector('#inpt-btn');
console.log(sendRequest);
let inptName = document.querySelector('.input-name');
let inptMail = document.querySelector('.input-mail');
let inptMore = document.querySelector('.input-more');

sendRequest.addEventListener('click', function (e) {
  saveContact();
})

function saveContact() {
  let userName = inptName.value;
  let userMail = inptMail.value;
  let userMore = inptMore.value;

  localStorage.setItem('name', userName);
  localStorage.setItem('e-mail', userMail);
  localStorage.setItem('more info', userMore);
}
