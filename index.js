import updateClock from "./Controller/timeTitle.js";
import checkBirthday from "./Controller/checkBirthday.js";
import addTaskToMainSection from "./Controller/addTasks.js";
import manipulateSidePanel from "./Controller/sidePanel.js";
import fetchCoinList from "./Controller/getCoinList.js";
import newsRender from "./Controller/newsRender.js";

// TITLE UPDATING
updateClock();

// TASK INPUT AND ADDING
addTaskToMainSection();

// MANIPULATE SIDE-PANEL
manipulateSidePanel();

// CHECK BIRTHDAY
checkBirthday();
setInterval(checkBirthday, 60000);

// Render coin info as moving message
fetchCoinList();
setInterval(fetchCoinList, 86400000);

// Render news
newsRender();
