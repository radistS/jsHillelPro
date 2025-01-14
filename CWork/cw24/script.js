function addTask() {
  const taskList = document.getElementById('task-list');
  const newTaskInput = document.getElementById('new-task');
  const taskText = newTaskInput.value.trim();
  if (taskText !== '') {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.onclick = function () {
      this.classList.toggle('completed');
    };
    taskList.appendChild(newTask);
    newTaskInput.value = '';
  } else {
    alert('Будь ласка, введіть завдання!');
  }
}
