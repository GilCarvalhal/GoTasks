function getTasks() {
  return JSON.parse(localStorage.getItem('@GoTasks'));
}

function getTasks(tasks) {
  localStorage.setItem('@GoTasks', JSON.stringify(tasks));
}