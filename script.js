const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = createTaskItem(taskText);
    taskList.append(taskItem);
    taskInput.value = "";
  }
}

function createTaskItem(taskText) {
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const taskTextSpan = document.createElement("span");
  taskTextSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", deleteTask);

  taskItem.appendChild(checkbox);
  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteBtn);

  return taskItem;
}

function deleteTask(e) {
  const taskItem = e.target.parentNode;
  taskList.removeChild(taskItem);
}

function toggleTask(e) {
  const taskItem = e.target.parentNode;
  taskItem.classList.toggle("completed");
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

taskList.addEventListener("change", toggleTask);

const initialTasks = ["Code", "Do Dishes"];

initialTasks.forEach((task) => {
  const taskItem = createTaskItem(task);
  taskList.appendChild(taskItem);
});
