import sayHello from './lib/sayHello.js';

sayHello();

$(document).ready(function() {
  //initialize swiper when document ready  
  var mySwiper = new Swiper ('.next-tournament-carousel', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });
  var mySwiper = new Swiper ('.sponsors-carousel', {
    // Optional parameters
    slidesPerView: 9,
    loop: true,
    autoplay: 5000
  });
});
