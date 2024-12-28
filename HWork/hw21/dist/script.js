"use strict";

$(document).ready(function () {
  var loadTasks = function loadTasks() {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    $("#task-list").empty();
    $.each(tasks, function (i, task) {
      var taskItem = $('<li>');
      var taskTitle = $('<span>').addClass('task-title').text(task.title);
      if (task.completed) {
        taskTitle.addClass('completed');
      }
      var buttons = $('<div>').addClass('buttons');
      var doneButton = $('<button>').addClass('done-button btn btn-success').text('Done');
      if (!task.completed) {
        doneButton.on('click', function () {
          taskTitle.addClass('completed');
          $(this).hide();
          saveTasks();
        });
        buttons.append(doneButton);
      }
      var deleteButton = $('<button>').addClass('delete-button btn btn-danger').text('Delete').on('click', function () {
        taskItem.remove();
        saveTasks();
      });
      var titleButton = $('<button>').addClass('btn btn-info').text('Details').on('click', function () {
        $('#taskModalLabel').text(task.title);
        $('#modal-task-desc').text(task.description);
        $("#taskModal").modal('show');
      });
      buttons.append(deleteButton, titleButton);
      taskItem.append(taskTitle).append(buttons);
      $("#task-list").append(taskItem);
    });
  };
  var saveTasks = function saveTasks() {
    var tasks = [];
    $("#task-list li").each(function () {
      var title = $(this).find('.task-title').text();
      var description = $(this).data('description');
      var completed = $(this).find('.task-title').hasClass('completed');
      tasks.push({
        title: title,
        description: description,
        completed: completed
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  $("#add-task").on('click', function () {
    var taskTitle = $("#task-title-input").val().trim();
    var taskDescription = $("#task-desc-input").val().trim();
    if (taskTitle && taskDescription) {
      var newTask = $('<li>');
      var taskTitleElement = $('<span>').addClass('task-title').text(taskTitle);
      newTask.data('description', taskDescription);
      var buttons = $('<div>').addClass('buttons');
      var doneButton = $('<button>').addClass('done-button btn btn-success').text('Done').on('click', function () {
        taskTitleElement.addClass('completed');
        $(this).hide();
        saveTasks();
      });
      var deleteButton = $('<button>').addClass('delete-button btn btn-danger').text('Delete').on('click', function () {
        newTask.remove();
        saveTasks();
      });
      var titleButton = $('<button>').addClass('btn btn-info').text('Details').on('click', function () {
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