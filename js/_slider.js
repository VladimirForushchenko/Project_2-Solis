'use strict';



$('.slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  // infinite: true,
  speed: 1500,
  arrows: true,
  dots: false,
  responsive: [{
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }]
}
);