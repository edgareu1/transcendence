import { i18nextInit, renderPage, renderSidebar } from "/static/js/services/index.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  renderPage();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    let currentElement = e.target;

    if (currentElement.matches("[data-link-locale]")) {
      e.preventDefault();
      i18next.changeLanguage(currentElement.getAttribute("data-link-locale"));
      return;
    }

    while (
      currentElement.tagName &&
      (currentElement.matches("[data-link]") || currentElement.parentNode)
    ) {
      if (currentElement.matches("[data-link]")) {
        e.preventDefault();
        navigateTo(currentElement.getAttribute("href"));
        return;
      }

      currentElement = currentElement.parentNode;
    }
  });

  const renderAll = () => {
    renderPage();
    renderSidebar();
  }

  i18nextInit().then(renderAll);
});
