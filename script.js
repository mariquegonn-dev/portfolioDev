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

function initMenuMobile() {
  const abrirModal = document.querySelector('[data-modal="abrir"]');
  const fecharModal = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="menu"]');
  const linkModal = document.querySelectorAll(".menu__mobile-container li a");
  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function clicouNoLink() {
    containerModal.classList.remove("ativo");
  }

  function clicouFora(event) {
    if (event.target === containerModal) {
      toggleModal(event);
    }
  }

  abrirModal.addEventListener("click", toggleModal);
  fecharModal.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", clicouFora);
  linkModal.forEach((item) => {
    item.addEventListener("click", clicouNoLink);
  });
}

initMenuMobile();
