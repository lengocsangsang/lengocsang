import { months } from "./config.js";
import weekDayCal from "./config.js";

const titleDate = document.querySelector(".titleDate");
const titleWeekday = document.querySelector(".titleWeekday");
const titleTime = document.querySelector(".title-time");

// DATE ON TITLE
//1. DATE

//5. Implement dynamic time on title
export default function updateClock() {
  const today = new Date();

  const year = today.getFullYear(); // 2025
  const month = months[today.getMonth()]; // Get month name (e.g., "Feb")
  const date = today.getDate(); // Get day of the month (e.g., 25)

  const titleHour = today.getHours().toString().padStart(2, "0");
  const titleMin = today.getMinutes().toString().padStart(2, "0");
  const titleSec = today.getSeconds().toString().padStart(2, "0");

  titleTime.textContent = `${titleHour}:${titleMin}:${titleSec}`;

  //4. Implement Date Weekday on Title

  titleDate.textContent = `${year} ${month} ${date},`;
  titleWeekday.textContent = weekDayCal();

  setTimeout(updateClock, 1000);
}
