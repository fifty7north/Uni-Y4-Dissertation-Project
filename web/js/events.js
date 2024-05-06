window.addEventListener("DOMContentLoaded", () => {
  /* Hero Buttons */
  document.getElementById("dyw-events-button").addEventListener("click", () => {
    document.getElementById("dyw-events-section").scrollIntoView();
  });
  document
    .getElementById("school-events-button")
    .addEventListener("click", () => {
      document.getElementById("school-events-section").scrollIntoView();
    });

  /* Expand Event Card */
  document.querySelectorAll(".event-card").forEach((card) => {
    let descriptionButton = card.querySelector(
      ".event-card-description-button"
    );
    descriptionButton.addEventListener("click", () => {
      card.classList.toggle("event-card-expanded");
      if (card.classList.contains("event-card-expanded")) {
        descriptionButton.innerHTML = "View Less";
      } else {
        descriptionButton.innerHTML = "View More";
      }
    });
  });
});
