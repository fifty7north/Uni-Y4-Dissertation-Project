window.addEventListener("DOMContentLoaded", () => {
  /* CTA Button */
  console.log(document.getElementById("signposts-button"));

  document.getElementById("signposts-button").addEventListener("click", () => {
    document.getElementById("signposts-section").scrollIntoView();
  });
  document
    .getElementById("latest-jobs-button")
    .addEventListener("click", () => {
      document.getElementById("latest-jobs-section").scrollIntoView();
    });

  /* Signposts Hover Effect */
  document.querySelectorAll(".homepage-signpost").forEach((signpost) => {
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
