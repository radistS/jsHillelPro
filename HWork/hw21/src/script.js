$(document).ready(function() {
  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    $("#task-list").empty();
    $.each(tasks, function(i, task) {
      const taskItem = $('<li>');
      const taskTitle = $('<span>').addClass('task-title').text(task.title);
      if (task.completed) {
        taskTitle.addClass('completed');
      }

      const buttons = $('<div>').addClass('buttons');
      const doneButton = $('<button>').addClass('done-button btn btn-success').text('Done');
      if (!task.completed) {
        doneButton.on('click', function() {
          taskTitle.addClass('completed');
          $(this).hide();
          saveTasks();
        });
        buttons.append(doneButton);
      }

      const deleteButton = $('<button>').addClass('delete-button btn btn-danger').text('Delete').on('click', function() {
        taskItem.remove();
        saveTasks();
      });

      const titleButton = $('<button>').addClass('btn btn-info').text('Details').on('click', function() {
        $('#taskModalLabel').text(task.title);
        $('#modal-task-desc').text(task.description);
        $("#taskModal").modal('show');
      });

      buttons.append(deleteButton, titleButton);
      taskItem.append(taskTitle).append(buttons);
      $("#task-list").append(taskItem);
    });
  };

  const saveTasks = () => {
    const tasks = [];
    $("#task-list li").each(function() {
      const title = $(this).find('.task-title').text();
      const description = $(this).data('description');
      const completed = $(this).find('.task-title').hasClass('completed');
      tasks.push({ title, description, completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  $("#add-task").on('click', function() {
    const taskTitle = $("#task-title-input").val().trim();
    const taskDescription = $("#task-desc-input").val().trim();
    if (taskTitle && taskDescription) {
      const newTask = $('<li>');
      const taskTitleElement = $('<span>').addClass('task-title').text(taskTitle);
      newTask.data('description', taskDescription);

      const buttons = $('<div>').addClass('buttons');
      const doneButton = $('<button>').addClass('done-button btn btn-success').text('Done').on('click', function() {
        taskTitleElement.addClass('completed');
        $(this).hide();
        saveTasks();
      });

      const deleteButton = $('<button>').addClass('delete-button btn btn-danger').text('Delete').on('click', function() {
        newTask.remove();
        saveTasks();
      });

      const titleButton = $('<button>').addClass('btn btn-info').text('Details').on('click', function() {
        $('#taskModalLabel').text(taskTitle);
        $('#modal-task-title').text(taskTitle);
        $('#modal-task-desc').text(taskDescription);
        $("#taskModal").modal('show');
      });

      buttons.append(doneButton, deleteButton, titleButton);
      newTask.append(taskTitleElement).append(buttons);
      $("#task-list").append(newTask);
      saveTasks();
      $("#task-title-input").val('');
      $("#task-desc-input").val('');
    } else {
      alert("Please fill both title and description ...");
    }
  });

  loadTasks();
});
