//NAVBAR

let nav = document.getElementById("navbar");

window.addEventListener('load', customNav);
window.addEventListener('scroll', customNav);

function customNav(e) {
  if (window.innerWidth >= 768) {
    if (window.pageYOffset > 20) {
      nav.style.backgroundColor = '#212121';
    } else {
      nav.style.backgroundColor = 'transparent';
    }
  } else {
    nav.style.backgroundColor = '#212121';
  }
}

//SMOOTH SCROLL
$('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 600, 'swing');
    event.preventDefault();
  });


//Vannila js FADE-IN EFFECT
// window.addEventListener('scroll', fadeIn);
//
// function fadeIn() {
//   const el = document.getElementsByClassName('fade-in-down')[0];
//   console.log(el.offsetTop);
//   console.log(el.getBoundingClientRect().top);
//   console.log(el.getBoundingClientRect().top);
// }

/*======================================*/
/*======= JQUERY-MAGNIFIC POPUP ========*/
/*======================================*/

$('.gallery-img-container').magnificPopup({
  delegate: 'a', // the selector for gallery item
  type: 'image',
  gallery: {
    enabled: true,
    preload: [0, 2],
    navigateByImgClick: true,
    tPrev: 'Previous', // title for left button
    tNext: 'Next', // title for right button
  }
});


/*======================================*/
/*============ OWL-CAROUSE =============*/
/*======================================*/

$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    margin: 20,
    smartSpeed: 600,
    // responsive: {
    //   0: {
    //     items: 1
    //   },
    //   600: {
    //     items: 3
    //   },
    //   1000: {
    //     items: 5
    //   }
    // }
  });
});


/*======================================*/
/*============= ANIVIEW.JS =============*/
/*======================================*/

var options = {
  animateThreshold: 100,
  scrollPollInterval: 20
}
$('.aniview').AniView(options);