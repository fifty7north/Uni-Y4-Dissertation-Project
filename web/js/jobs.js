/* Rotating Hero Image */
const heroImages = [
  "jobs-hero-home.png",
  "jobs-hero-plants.png",
  "jobs-hero-whiteboard.png",
  "jobs-hero-wireframe.png",
];
var heroCounter = 0;
setInterval(() => {
  heroCounter++;
  if (heroCounter >= heroImages.length) {
    heroCounter = 0;
  }
  document.getElementById("jobs-hero-image").src =
    "static/images/"+heroImages[heroCounter];
}, 1000);

/* Expand Job Card */
document.querySelectorAll(".job-card").forEach((card) => {
  let descriptionButton = card.querySelector(".job-card-description-button");
  descriptionButton.addEventListener("click", () => {
    card.classList.toggle("job-card-expanded");
    if (card.classList.contains("job-card-expanded")) {
      descriptionButton.innerHTML = "Read Less";
    } else {
      descriptionButton.innerHTML = "Read More";
    }
  });
});
