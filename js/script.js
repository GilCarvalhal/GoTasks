const table = document.getElementById("table-body");
const modal = document.getElementById("modal");
const form = document.getElementById("form");
const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const loadingMessage = document.getElementById("loading-message");
const countTasks = document.getElementById("count-tasks");
const btnCreateTasks = document.getElementById("btn-create-task");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
  clearFields();
}

function clearFields() {
  inputDate.value = '';
  inputDescription.value = '';
}
