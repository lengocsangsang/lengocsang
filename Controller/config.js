// Months for timeTitle.js
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Weekday for timeTitle.js

export default function weekDayCal() {
  let weekDay;
  switch (new Date().getDay()) {
    case 0:
      weekDay = "Sunday";
      break;
    case 1:
      weekDay = "Monday";
      break;
    case 2:
      weekDay = "Tuesday";
      break;
    case 3:
      weekDay = "Wednesday";
      break;
    case 4:
      weekDay = "Thursday";
      break;
    case 5:
      weekDay = "Friday";
      break;
    case 6:
      weekDay = "Saturday";
      break;
  }
  return weekDay;
}

// Birthdays for checkBirthday.js
export const birthdays = {
  HaNhu: "2000-08-07",
  MinhNhu: "2004-03-06",
  Dad: "1953-01-04",
  Sang: "1988-05-01",
  Ngan: "1982-10-10",
  Huyen: "1980-06-10",
  Trong: "1980-03-16",
};

// Color for Fireworks for checkBirthday.js
export const fireworkColors = [
  {
    color: "#ff4081", // Pink
    shadow: "0 0 5px #ff4081, 0 0 10px #ff4081, 0 0 15px #ff4081",
  },
  {
    color: "#00bcd4", // Light Blue
    shadow: "0 0 5px #00bcd4, 0 0 10px #00bcd4, 0 0 15px #00bcd4",
  },
  {
    color: "#ffffff", // White
    shadow: "0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff",
  },
  {
    color: "#8bc34a", // Green
    shadow: "0 0 5px #8bc34a, 0 0 10px #8bc34a, 0 0 15px #8bc34a",
  },
  {
    color: "#ffeb3b", // Yellow
    shadow: "0 0 5px #ffeb3b, 0 0 10px #ffeb3b, 0 0 15px #ffeb3b",
  },
  {
    color: "#9c27b0", // Purple
    shadow: "0 0 5px #9c27b0, 0 0 10px #9c27b0, 0 0 15px #9c27b0",
  },
  {
    color: "#e91e63", // Deep Pink
    shadow: "0 0 5px #e91e63, 0 0 10px #e91e63, 0 0 15px #e91e63",
  },
  {
    color: "#2196f3", // Blue
    shadow: "0 0 5px #2196f3, 0 0 10px #2196f3, 0 0 15px #2196f3",
  },
  {
    color: "#ff5722", // Orange
    shadow: "0 0 5px #ff5722, 0 0 10px #ff5722, 0 0 15px #ff5722",
  },
  {
    color: "#673ab7", // Indigo
    shadow: "0 0 5px #673ab7, 0 0 10px #673ab7, 0 0 15px #673ab7",
  },
  {
    color: "#4caf50", // Lime Green
    shadow: "0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50",
  },
  {
    color: "#ff9800", // Amber
    shadow: "0 0 5px #ff9800, 0 0 10px #ff9800, 0 0 15px #ff9800",
  },
  {
    color: "#3f51b5", // Royal Blue
    shadow: "0 0 5px #3f51b5, 0 0 10px #3f51b5, 0 0 15px #3f51b5",
  },
  {
    color: "#009688", // Teal
    shadow: "0 0 5px #009688, 0 0 10px #009688, 0 0 15px #009688",
  },
  {
    color: "#c2185b", // Deep Rose
    shadow: "0 0 5px #c2185b, 0 0 10px #c2185b, 0 0 15px #c2185b",
  },
  {
    color: "#607d8b", // Blue Grey
    shadow: "0 0 5px #607d8b, 0 0 10px #607d8b, 0 0 15px #607d8b",
  },
  {
    color: "#795548", // Brown
    shadow: "0 0 5px #795548, 0 0 10px #795548, 0 0 15px #795548",
  },
  {
    color: "#ffb300", // Golden Yellow
    shadow: "0 0 5px #ffb300, 0 0 10px #ffb300, 0 0 15px #ffb300",
  },
];

export const ai = document.querySelector(".country-button-ai");
export const technology = document.querySelector(".country-button-technology");
export const crypto = document.querySelector(".country-button-crypto");
export const business = document.querySelector(".country-button-business");
export const sports = document.querySelector(".country-button-sports");
export const travel = document.querySelector(".country-button-travel");
export const finance = document.querySelector(".country-button-finance");

export const familyButton = document.getElementById("#panel-item-family");
