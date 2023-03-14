const table = document.getElementById("table-body");
const modal = document.getElementById("modal");
const form = document.getElementById("form");
const inputDescription = document.getElementById("description");
const inputDate = document.getElementById("date");
const loadingMessage = document.getElementById("loading-message");
const countTasks = document.getElementById("count-tasks");
const btnCreateTasks = document.getElementById("btn-create-task");

// MODAL =======
btnCreateTasks.addEventListener("click", createTask);

function createTask(e) {
  e.preventDefault();

  if (!inputDescription.value || !inputDate.value) {
    alert("Preencha todos os campos!");
    return;
  }

  const newTask = {
    description: inputDescription.value,
    date: new Date(inputDate.value).toLocaleDateString(),
    id: Math.floor(Math.random() * 10000),
  };

  localStorage.setItem("@GoTasks", JSON.stringify([newTask]));

  toggleModal();
  clearFields();
}

function toggleModal() {
  modal.classList.toggle("modal-visible");
}

function clearFields() {
  inputDate.value = "";
  inputDescription.value = "";
}
