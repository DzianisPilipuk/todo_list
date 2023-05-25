const createTaskButton = document.getElementById("create_task_button");
const taskFormScreen = document.getElementById("task_form_screen");
const taskAddingButton = document.getElementById("add_task_button");
const allTasks = [];

const renderTasks = (tasksStorage, renderContainer) => {
  while (renderContainer.lastChild) {
    renderContainer.removeChild(renderContainer.lastChild);
  }
  for (let i = 0; i < tasksStorage.length; i += 1) {
    const taskWrapper = document.createElement("div");
    taskWrapper.className = "task-wrapper";
    renderContainer.appendChild(taskWrapper);

    const taskName = document.createElement("div");
    taskName.className = "task-name";
    taskName.textContent = tasksStorage[i].taskName;
    taskWrapper.appendChild(taskName);

    const taskDescription = document.createElement("div");
    taskDescription.className = "task-description";
    taskDescription.textContent = tasksStorage[i].taskDescription;
    taskWrapper.appendChild(taskDescription);

    if (tasksStorage[i].priority === "high") {
      taskWrapper.style.backgroundColor = "var(--high-priority-task)";
    }
    if (tasksStorage[i].priority === "medium") {
      taskWrapper.style.backgroundColor = "var(--medium-priority-task)";
    }
    if (tasksStorage[i].priority === "low") {
      taskWrapper.style.backgroundColor = "var(--low-priority-task)";
    }
    if (tasksStorage[i].priority === "none") {
      taskWrapper.style.backgroundColor = "var(--none-priority-task)";
    }
  }
};

const createTask = (taskName, taskDescription, priority) => {
  const task = {
    taskName,
    taskDescription,
    priority,
    isDone: false,
  };
  return task;
};

const showTaskFormScreen = () => {
  taskFormScreen.style.visibility = "visible";
};

const hideTaskFormScreen = () => {
  taskFormScreen.style.visibility = "hidden";
};

taskAddingButton.addEventListener("click", () => {
  const taskName = document.getElementById("task_name").value;
  const taskDescription = document.getElementById("task_description").value;
  const taskPriority = document.getElementById("task_priority").value;
  allTasks.push(createTask(taskName, taskDescription, taskPriority));
  hideTaskFormScreen();
  renderTasks(allTasks, document.getElementById("existing_tasks"));
  console.log(allTasks);
});

createTaskButton.addEventListener("click", () => {
  showTaskFormScreen();
});
