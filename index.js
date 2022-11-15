let swiper = new Swiper("#fundo", {
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

//Show Video
let playButton = document.querySelectorAll(".bx-play");
let video = document.querySelectorAll(".video-container");
let trailer = document.querySelectorAll(".trailer");
let close = document.querySelectorAll(".close-video");

for (let i = 0; i < playButton.length; i++) {
  playButton[i].onclick = () => {
    video[i].classList.add("show-video");
    trailer[i].play();
  };
  close[i].onclick = () => {
    video[i].classList.remove("show-video");
    trailer[i].pause();
  }
};