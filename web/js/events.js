/* Expand Event Card */
document.querySelectorAll(".event-card").forEach((card) => {
  let descriptionButton = card.querySelector(".event-card-description-button");
  descriptionButton.addEventListener("click", () => {
    card.classList.toggle("event-card-expanded");
    if (card.classList.contains("event-card-expanded")) {
      descriptionButton.innerHTML = "View Less";
    } else {
      descriptionButton.innerHTML = "View More";
    }
  });
});
