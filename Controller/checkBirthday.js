import { fireworkColors, birthdays } from "./config.js?v=randomhash";

export default function checkBirthday() {
  let today = new Date();
  let todayMonth = today.getMonth();
  let todayDate = today.getDate();

  // Check for birthdays today
  for (let name in birthdays) {
    let birthday = new Date(birthdays[name]);
    let birthdayMonth = birthday.getMonth();
    let birthdayDate = birthday.getDate();

    //Add moving message
    if (todayMonth === birthdayMonth && todayDate === birthdayDate) {
      console.log(birthday.getMonth(), birthday.getDate());
      document.querySelector(
        ".moving-message"
      ).textContent = `Happy Birthday to ${name}!!!`;

      // Add fireworks to the container
      const fireworkContainer = document.querySelector(".right-container");

      // Create fireworks dynamically

      // randomly assign colors and effects to the fireworks

      function assignFireworkEffects() {
        for (let i = 0; i < 100; i++) {
          // 10 fireworks
          const firework = document.createElement("div");
          firework.classList.add("firework");
          firework.style.top = `${Math.random() * 100}%`; // Random placement
          firework.style.left = `${Math.random() * 100}%`;
          fireworkContainer.appendChild(firework);
        }
        const fireworks = fireworkContainer.querySelectorAll(".firework");
        console.log("fireworks.length:", fireworks.length);
        for (let i = 0; i < fireworks.length; i++) {
          const randomIndex = Math.floor(Math.random() * fireworkColors.length);
          const { color, shadow } = fireworkColors[randomIndex];

          // Apply the color and shadow dynamically
          fireworks[i].style.backgroundColor = color;
          fireworks[i].style.boxShadow = shadow;
        }
      }

      assignFireworkEffects();

      // Optional: Remove fireworks after animation completes
      setTimeout(() => {
        const fireworks = fireworkContainer.querySelectorAll(".firework");
        fireworks.forEach((firework) => firework.remove());
      }, 100000); // Remove fireworks after 2 seconds (when the animation is finished)
    }
  }
}
