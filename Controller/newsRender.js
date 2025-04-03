import newsFunction from "./newsFunction.js";

import {
  language,
  general, //GUARD
  business,
  technology, //GUARD
  entertainment,
  sports, //GUARD
  science,
  health,
} from "./config.js";

export default async function newsRender() {
  language.dataset.lang = "ja";
  // Add the click event listener only once
  language.addEventListener("click", function () {
    if (language.dataset.lang === "ja") {
      language.dataset.lang = "en";
      language.textContent = "EN"; // Update to indicate switching to English
    } else if (language.dataset.lang === "en") {
      language.dataset.lang = "ja";
      language.textContent = "JA"; // Update to indicate switching to Japanese
    }
  });

  general.addEventListener("click", async function () {
    if (language.dataset.lang === "ja") {
      newsFunction("general", "ja", "jp");
    } else {
      newsFunction("general", "en", "us");
    }
  });

  // CRYPTO BUTTON CLICK
  business.addEventListener("click", async function () {
    if (language.dataset.lang === "ja") {
      newsFunction("business", "ja", "jp");
    } else {
      newsFunction("business", "en", "us");
    }
  });
  // CRYPTO BUTTON CLICK

  technology.addEventListener("click", async function () {
    if (language.dataset.lang === "ja") {
      newsFunction("technology", "ja", "jp");
    } else {
      newsFunction("technology", "en", "us");
    }
  });

  entertainment.addEventListener("click", async function () {
    if (language.dataset.lang === "ja") {
      newsFunction("entertainment", "ja", "jp");
    } else {
      newsFunction("entertainment", "en", "us");
    }
  });
  sports.addEventListener("click", async function () {
    if (language.dataset.lang === "ja") {
      newsFunction("sports", "ja", "jp");
    } else {
      newsFunction("sports", "en", "us");
    }
  });
  science.addEventListener("click", async function () {
    if (language.dataset.lang === "ja") {
      newsFunction("science", "ja", "jp");
    } else {
      newsFunction("science", "en", "us");
    }
  });
  health.addEventListener("click", async function () {
    if (language.dataset.lang === "ja") {
      newsFunction("health", "ja", "jp");
    } else {
      newsFunction("health", "en", "us");
    }
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
