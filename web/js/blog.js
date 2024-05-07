window.addEventListener("DOMContentLoaded", () => {
  /* CTA Button */
  document.getElementById("blog-button").addEventListener("click", () => {
    document.getElementById("blog-posts").scrollIntoView();
  });
  document
    .getElementById("career-stories-button")
    .addEventListener("click", () => {
      document.getElementById("career-stories").scrollIntoView();
    });
});
