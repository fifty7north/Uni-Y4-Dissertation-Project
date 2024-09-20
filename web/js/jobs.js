window.addEventListener("DOMContentLoaded", () => {
  /* Hero Buttons */
  document.getElementById("jobs-button").addEventListener("click", () => {
    document.getElementById("jobs-list").scrollIntoView();
  });
  document.getElementById("help-button").addEventListener("click", () => {
    document.getElementById("help-section").scrollIntoView();
  });

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
    document.getElementById("hero-image").src =
      "images/hero/" + heroImages[heroCounter];
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

  /* Signposts Hover Effect */
  document.querySelectorAll(".signpost").forEach((signpost) => {
    signpost.addEventListener("mouseenter", () => {
      signpost.querySelector("h3").classList.add("highlight-effect-hover");
      signpost.querySelector("img").classList.add("signpost-image-hover");
    });
    signpost.addEventListener("mouseleave", () => {
      signpost.querySelector("h3").classList.remove("highlight-effect-hover");
      signpost.querySelector("img").classList.remove("signpost-image-hover");
    });
  });
});
