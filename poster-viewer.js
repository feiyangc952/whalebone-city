const posterViewer = document.querySelector(".viewer");

if (typeof posterViewer.showModal === "function") {
  const posterContainer = posterViewer.querySelector(".viewer-image");
  const thumbnail = document.querySelector(".poster-link img");

  document.querySelectorAll("[data-open-poster]").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      if (!posterContainer.firstElementChild) {
        const fullPoster = new Image(
          Number(thumbnail.getAttribute("width")),
          Number(thumbnail.getAttribute("height")),
        );
        fullPoster.alt = thumbnail.alt;
        fullPoster.src = link.href;
        posterContainer.append(fullPoster);
      }

      event.preventDefault();
      posterViewer.showModal();
      posterViewer.scrollTop = 0;
    });
  });
}
