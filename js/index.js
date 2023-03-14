const table = document.getElementById("table-body");
const loadingMessage = document.getElementById("loading-message");
const countTasks = document.getElementById("count-tasks");

function loadTasks() {
  const tasks = getTasks() || [];
  return tasks;
}

function updateCountTasks() {
  const allTasks = loadTasks();
  countTasks.innerHTML = allTasks.length;
}
