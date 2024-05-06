/* Layout Detection Function */
var deviceLayout;
function getLayout() {
  if (window.innerWidth <= 768) {
    deviceLayout = "mobileLayout";
  } else {
    deviceLayout = "desktopLayout";
  }
}
getLayout();
addEventListener("resize", () => {
  getLayout();
});

/* Fade In Animation */
function fadeInAnimation() {
  document.querySelectorAll(".fade-in-animation").forEach((element) => {
    let fadePosition =
      element.getBoundingClientRect().y +
      element.getBoundingClientRect().height * 0.67;
    if (deviceLayout == "mobileLayout") {
      if (fadePosition < window.innerHeight - 80) {
        element.classList.remove("fade-in-animation");
        element.classList.add("faded-in");
      }
    } else {
      if (fadePosition < window.innerHeight) {
        element.classList.remove("fade-in-animation");
        element.classList.add("faded-in");
      }
    }
  });
}
fadeInAnimation();
addEventListener("scroll", () => {
  fadeInAnimation();
});
