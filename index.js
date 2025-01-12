const addBtn = document.querySelector("#add-btn");
const newTaskInput = document.querySelector("#wrapper input");
const tasksContainer = document.querySelector("#tasks");
const error = document.getElementById("error");
const countValue = document.querySelector(".count-value");

let taskCount = 0;

const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none";
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block";
    }, 200);
    return;
  }

  const task = `<div class="task"> 
    <input type="checkbox" class="task-check">
    <span class="taskname">${taskName}</span>
    <button class="edit">
      <i class="fa-solid fa-pen-to-square"></i>
    </button>
    <button class="delete">
      <i class="fa-solid fa-trash"></i>
    </button>
  </div>`;

  tasksContainer.insertAdjacentHTML("beforeend", task);
  newTaskInput.value = "";
  taskCount++;
  displayCount(taskCount);
};

const deleteTask = (e) => {
  if (e.target.classList.contains("delete") || e.target.parentElement.classList.contains("delete")) {
    e.target.closest(".task").remove();
    taskCount--;
    displayCount(taskCount);
  }
};

const editTask = (e) => {
  if (e.target.classList.contains("edit") || e.target.parentElement.classList.contains("edit")) {
    const taskElement = e.target.closest(".task");
    const taskNameElement = taskElement.querySelector(".taskname");
    const newTaskName = prompt("Edit task name:", taskNameElement.innerText);
    if (newTaskName) {
      taskNameElement.innerText = newTaskName.trim();
    }
  }
};

addBtn.addEventListener("click", addTask);
tasksContainer.addEventListener("click", (e) => {
  deleteTask(e);
  editTask(e);
});

