const createTaskButton = document.getElementById("create_task_button");
const taskFormScreen = document.getElementById("task_form_screen");
const taskAddingButton = document.getElementById("add_task_button");

const showTaskFormScreen = () => {
  taskFormScreen.style.visibility = "visible";
};

const hideTaskFormScreen = () => {
  taskFormScreen.style.visibility = "hidden";
};

taskAddingButton.addEventListener("click", () => {
  hideTaskFormScreen();
});

createTaskButton.addEventListener("click", () => {
  showTaskFormScreen();
});
