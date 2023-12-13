// Definir el array para almacenar tareas
let tasks: { id: number; title: string; completed: boolean; important: boolean }[] = [];

// Obtener referencias a las listas
const allTasksList = document.getElementById('allTasks')!;
const importantTasksList = document.getElementById('importantTasks')!;

// Función para añadir tarea
function addTask() {
  const taskTitleInput = document.getElementById('taskTitle') as HTMLInputElement;
  const taskTitle = taskTitleInput.value.trim();

  if (taskTitle !== '') {
    const newTask = { id: tasks.length + 1, title: taskTitle, completed: false, important: false };
    tasks.push(newTask);
    displayTasks();
    taskTitleInput.value = '';
  }
}

// Función para borrar tarea
function deleteTask(id: number) {
  tasks = tasks.filter(task => task.id !== id);
  displayTasks();
}

// Función para marcar tarea como importante
function markAsImportant(id: number) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.important = true;
    displayTasks();
  }
}

// Función para mostrar tareas en las listas
function displayTasks() {
  allTasksList.innerHTML = '';
  importantTasksList.innerHTML = '';

  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = task.title;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => deleteTask(task.id));

    listItem.appendChild(deleteButton);

    const importantButton = document.createElement('button');
    importantButton.textContent = 'Importante';
    importantButton.addEventListener('click', () => markAsImportant(task.id));

    listItem.appendChild(importantButton);

    if (task.important) {
      listItem.style.color = 'red';
      importantTasksList.appendChild(listItem);
    } else {
      allTasksList.appendChild(listItem);
    }
  });
}

// Mostrar tareas iniciales
displayTasks();
