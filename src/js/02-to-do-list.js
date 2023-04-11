// Отримати посилання на список завдань та форми
const taskList = document.getElementById("taskList");
const form = document.querySelector("form")

// Додати обробник події для додавання нового завдання
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Заборонити стандартну поведінку форми

  const newTaskInput = document.getElementById("newTask");
  const newTaskText = newTaskInput.value.trim();

  if (newTaskText.length > 0) {
    // Створити новий елемент завдання
    const newTask = document.createElement("li");
    const newTaskTextSpan = document.createElement("span");
    const newTaskDeleteButton = document.createElement("button");
    const newTaskCheckbox = document.createElement("input");

    newTaskDeleteButton.textContent = "Delete";
    newTaskDeleteButton.classList.add("deleteButton");
    newTaskCheckbox.type = "checkbox";
    newTaskTextSpan.textContent = newTaskText;

    newTask.appendChild(newTaskCheckbox);
    newTask.appendChild(newTaskTextSpan);
    newTask.appendChild(newTaskDeleteButton);
    taskList.appendChild(newTask);

    // Очистити поле введення
    newTaskInput.value = "";
  }
});

// Додати обробник події для видалення завдання
taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("deleteButton")) {
    const listItem = event.target.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
});

// Додати обробник події для відмітки виконання завдання
taskList.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const listItem = event.target.parentNode;
    if (event.target.checked) {
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  }
});
