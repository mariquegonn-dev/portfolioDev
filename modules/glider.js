export default function initGlider() {
  new Glider(document.querySelector(".glider"), {
    // Mobile-first defaults
    slidesToShow: 1.2,
    slidesToScroll: 1,
    scrollLock: true,
    draggable: true,
    dots: ".dots",
    duration: 0.25,
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
  });
}
