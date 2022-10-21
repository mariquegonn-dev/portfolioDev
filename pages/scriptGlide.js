new Glider(document.querySelector(".gliderProject"), {
  // Mobile-first defaults
  slidesToShow: 1.5,
  slidesToScroll: 1,
  scrollLock: true,
  draggable: true,
  dots: ".dots",
  duration: 0.25,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next2",
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 950,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
