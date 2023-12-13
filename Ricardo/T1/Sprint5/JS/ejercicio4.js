// Definir el array para almacenar tareas
var tasks = [];
// Obtener referencias a las listas
var allTasksList = document.getElementById('allTasks');
var importantTasksList = document.getElementById('importantTasks');
// Función para añadir tarea
function addTask() {
    var taskTitleInput = document.getElementById('taskTitle');
    var taskTitle = taskTitleInput.value.trim();
    if (taskTitle !== '') {
        var newTask = { id: tasks.length + 1, title: taskTitle, completed: false, important: false };
        tasks.push(newTask);
        displayTasks();
        taskTitleInput.value = '';
    }
}
// Función para borrar tarea
function deleteTask(id) {
    tasks = tasks.filter(function (task) { return task.id !== id; });
    displayTasks();
}
// Función para marcar tarea como importante
function markAsImportant(id) {
    var task = tasks.find(function (task) { return task.id === id; });
    if (task) {
        task.important = true;
        displayTasks();
    }
}
// Función para mostrar tareas en las listas
function displayTasks() {
    allTasksList.innerHTML = '';
    importantTasksList.innerHTML = '';
    tasks.forEach(function (task) {
        var listItem = document.createElement('li');
        listItem.textContent = task.title;
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', function () { return deleteTask(task.id); });
        listItem.appendChild(deleteButton);
        var importantButton = document.createElement('button');
        importantButton.textContent = 'Importante';
        importantButton.addEventListener('click', function () { return markAsImportant(task.id); });
        listItem.appendChild(importantButton);
        if (task.important) {
            listItem.style.color = 'red';
            importantTasksList.appendChild(listItem);
        }
        else {
            allTasksList.appendChild(listItem);
        }
    });
}
// Mostrar tareas iniciales
displayTasks();
