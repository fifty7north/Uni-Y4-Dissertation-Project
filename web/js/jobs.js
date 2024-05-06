window.addEventListener("DOMContentLoaded", () => {
  /* Rotating Hero Image */
  const heroImages = [
    "jobs-hero-home.svg",
    "jobs-hero-plants.svg",
    "jobs-hero-whiteboard.svg",
    "jobs-hero-wireframe.svg",
  ];
  var heroCounter = 0;
  setInterval(() => {
    heroCounter++;
    if (heroCounter >= heroImages.length) {
      heroCounter = 0;
    }
    document.getElementById("jobs-hero-image").src =
      "static/images/" + heroImages[heroCounter];
  }, 1000);

  /* Expand Job Card */
  document.querySelectorAll(".job-card").forEach((card) => {
    let descriptionButton = card.querySelector(".job-card-description-button");
    descriptionButton.addEventListener("click", () => {
      card.classList.toggle("job-card-expanded");
      if (card.classList.contains("job-card-expanded")) {
        descriptionButton.innerHTML = "View Less";
      } else {
        descriptionButton.innerHTML = "View More";
      }
    });
  });
});
