new Swiper("#fundo", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

//Trailer
for (let i = 0; i < $('.bx-play').length; i++) {
  $('.bx-play')[i].onclick = () => {
    $('.video-container')[i].classList.add("show-video");
    $('.trailer')[i].play();
  };
  $('.close-video')[i].onclick = () => {
    $('.video-container')[i].classList.remove("show-video");
    $('.trailer').pause();
  }
};

//Menu 
addEventListener('scroll', () => {
  $('header').toggleClass('menu-cor', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');

menu.onclick = () => {
  $('#menu-icon').toggleClass('bx-x');
  $('.menu').toggleClass('ativo');
}
window.onscroll = () => {
  $('#menu-icon').removeClass('bx-x');
  $('.menu').removeClass('ativo');
}