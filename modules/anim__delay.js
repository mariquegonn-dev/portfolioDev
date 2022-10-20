export default function initAnimDelay() {
  const firstTargetLeft = document.querySelector(".firstTargetLeft");
  const firstTargetRight = document.querySelector(".firstTargetRight");

  setTimeout(() => {
    firstTargetLeft.classList.add("left");
    firstTargetRight.classList.add("down");
  }, 500);

  window.Animation;
}
