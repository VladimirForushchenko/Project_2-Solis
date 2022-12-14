'use strict';

// Black-white mode ===========================================

let switchTheme = document.querySelector('.switch__theme');
let darkBody = document.querySelector('html');
let darkStatistic = document.querySelector('.desc-black');
let darkBckgr = document.querySelector('.main');

console.log(darkStatistic);

switchTheme.addEventListener('click', function () {
  darkBody.classList.toggle('dark_body');
  darkStatistic.classList.toggle('dark-bckgrn');
  darkBckgr.classList.toggle('bckgrn_dark');

  //!!!!!!!!!!!!!!!! У меня есть 2 блока с классом desc-black, но при событии бэкграунд меняется только у одного. КАКОГО ХУЯ?

  // !!!!!!!!!!!! Класс bckgrn_dark добавляется, но стили не подтягиваются. КАКОГО ХУЯ?

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

valueInpt.addEventListener('input', function (e) {
  let recieveResult = valueInpt.value * rate;
  console.log(recieveResult, e.target);

  recieve.innerHTML = `${recieveResult.toFixed(1)}`;

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


// !!!!!!! НЕ РАБОТАЕТ!! КАКОГО ХУЯ????

function myFunction() {
  var txt = "";
  if (document.getElementById("pay").validity.rangeOverflow) {
    txt = "Значение слишком большое";

    console.log('###', !!e.target.validity.rangeOverflow);
  }

  // if (Number(document.getElementById("pay").value) > 100) {
  //   txt = "Значение слишком большое";
  // }

  document.getElementById("demo").innerHTML = txt;
}


