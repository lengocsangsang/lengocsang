export default function addTaskToMainSection() {
  document.addEventListener("DOMContentLoaded", function () {
    const taskInputBox = document.querySelector(".taskInputBox");
    const taskList = document.querySelector(".taskList");
    const clearTaskBtn = document.querySelector(".clearTaskBtn");

    loadPage();

    taskInputBox.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        let dataInlocalStorage =
          JSON.parse(localStorage.getItem("tasks")) || [];
        const index =
          dataInlocalStorage.length === 0 ? 0 : dataInlocalStorage.length;
        let taskContent = taskInputBox.value.trim();
        if (taskContent === "") {
          return alert("You haven't input your task yet");
        }
        addTaskToDom(taskContent, index);
        saveTaskToLocalStorage(taskContent);
        taskInputBox.value = "";
      }
    });

    taskList.addEventListener("click", function (e) {
      const deleteBtn = e.target.closest(".task-delete-button");
      let dataInlocalStorage = JSON.parse(localStorage.getItem("tasks")) || [];
      if (deleteBtn) {
        dataInlocalStorage.splice(deleteBtn.dataset.key, 1);
        deleteBtn.parentElement.remove();
        localStorage.setItem("tasks", JSON.stringify(dataInlocalStorage));
      }
    });

    clearTaskBtn.addEventListener("click", removeItemFromLocalStorage);

    function addTaskToDom(taskContent, index) {
      const taskItem = document.createElement("li");
      const deleteBtn = document.createElement("span");

      taskItem.classList.add("task-item");
      taskItem.textContent = taskContent;

      deleteBtn.textContent = " -";
      deleteBtn.classList.add("task-delete-button");
      deleteBtn.dataset.key = index;

      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
    }

    function saveTaskToLocalStorage(taskContent) {
      let tasks = getTasksFromLocalStorage();

      tasks.push(taskContent);
      // console.log(tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function getTasksFromLocalStorage() {
      let tasks = localStorage.getItem("tasks");
      if (tasks === null) {
        tasks = [];
      } else {
        tasks = JSON.parse(tasks);
      }
      return tasks;
    }

    function loadPage() {
      let tasks = getTasksFromLocalStorage();
      tasks.forEach((task, index) => {
        addTaskToDom(task, index);
      });
    }

    function removeItemFromLocalStorage() {
      let tasks = getTasksFromLocalStorage();
      if (tasks.length === 0) {
        return alert("no tasks registered yet");
      }
      localStorage.removeItem("tasks");
      taskList.innerHTML = "";
    }
  });
}
