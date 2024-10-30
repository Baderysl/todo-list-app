// Show Add Task Screen
function showAddTask() {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('addTask').classList.remove('hidden');
}

// Show Home Screen
function showHome() {
    document.getElementById('addTask').classList.add('hidden');
    document.getElementById('home').classList.remove('hidden');
}

// Add Task Function
function addTask() {
    const title = document.getElementById('taskTitle').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const list = document.getElementById('taskList');

    // Create a new task item
    const newTask = document.createElement('li');
    newTask.innerHTML = `<input type="checkbox"> ${title} - Due ${dueDate}`;

    // Add the new task to the list
    list.appendChild(newTask);

    // Clear the form and go back to the home screen
    document.getElementById('taskTitle').value = '';
    document.getElementById('taskDescription').value = '';
    document.getElementById('taskDueDate').value = '';
    document.getElementById('taskPriority').value = 'Low';
    showHome();
}
