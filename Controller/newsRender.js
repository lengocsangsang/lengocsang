import newsFunction from "./newsFunction.js";

import {
  general, //GUARD
  business,
  technology, //GUARD
  entertainment,
  sports, //GUARD
  science,
  health,
} from "./config.js";

export default async function newsRender() {
  // AI BUTTON CLICK
  general.addEventListener("click", async function () {
    newsFunction("general");
  });

  // CRYPTO BUTTON CLICK
  business.addEventListener("click", async function () {
    newsFunction("business");
  });

  // BUSINESS BUTTON CLICK
  technology.addEventListener("click", async function () {
    newsFunction("technology");
  });

  // SPORTS BUTTON CLICK
  entertainment.addEventListener("click", async function () {
    newsFunction("entertainment");
  });

  // TRAVEL BUTTON CLICK
  sports.addEventListener("click", async function () {
    newsFunction("sports");
  });

  // FINANCE BUTTON CLICK
  science.addEventListener("click", async function () {
    newsFunction("science");
  });

  // HEALTH BUTTON CLICK
  health.addEventListener("click", async function () {
    newsFunction("health");
  });
}

document.querySelectorAll(".back-to-homepage").forEach((button) => {
  button.addEventListener("click", function () {
    const element = document.getElementById("homepage");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
