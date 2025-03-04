export default function manipulateSidePanel() {
  document
    .querySelector(".side-panel-button")
    .addEventListener("mouseenter", function () {
      document.querySelector(".side-panel").style.transform =
        "translateX(22.3vw)";
    });

  document
    .querySelector(".panel-button-container")
    .addEventListener("mouseleave", function () {
      document.querySelector(".side-panel").style.transform =
        "translateX(-22.3vw)";
    });

  document
    .getElementById("panel-item-news")
    .addEventListener("click", function () {
      const element = document.getElementById("newspage");
      element.scrollIntoView();
    });

  document
    .getElementById("panel-item-family")
    .addEventListener("click", function () {
      const element = document.querySelector(".family-general-container");
      element.scrollIntoView();
    });

  document
    .getElementById("panel-item-professional")
    .addEventListener("click", function () {
      const element = document.querySelector(".professional-general-container");
      element.scrollIntoView();
    });
}
