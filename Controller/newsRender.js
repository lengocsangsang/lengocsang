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

const backButton = document.querySelector(".back-to-homepage");

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

  backButton.addEventListener("click", function () {
    const element = document.querySelector(".general-container");
    element.scrollIntoView();
  });
}
