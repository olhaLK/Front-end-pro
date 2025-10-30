import '../sass/style.scss';


const inputTaskName = document.getElementById('name');
const selectedPriority = document.getElementById('priority');
const textDetails = document.getElementById('details');
const addButton = document.querySelector('.add-btn');
const taskList = document.getElementById('task-list');


const serverURL = 'http://localhost:5500';


const loadTasks = async () => {
    const response = await fetch(`${serverURL}/tasks`);
    const tasks = await response.json();
    updateList(tasks);
}


const updateList = (tasks) => {
    taskList.innerHTML = ''; 

    const priorities = { high: 1, medium: 2, low: 3 };

    tasks.sort((a, b) => {
        priorities[a.priority] - priorities[b.priority]
    })

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
 
        if (task.completed) {
            taskItem.classList.add('completed');
        }

        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTaskCompletion('${task.name}')">
            <span class="task-name">${task.name}</span> ${task.priority}
            <button onclick="editTask('${task.name}')">Edit</button>
            <button onclick="deleteTask('${task.name}')">Delete</button>
        `;
        taskList.appendChild(taskItem);
    })
}


const addTask = async (event) => {
    event.preventDefault();

    const name = inputTaskName.value;
    const priority = selectedPriority.value;
    const details = textDetails.value;

    if (name && priority && details) {
        const task = { name, priority, details, completed: false };
        const response = await fetch(`${serverURL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })

        const newTask = await response.json();
        loadTasks(); 
    } else {
        alert('Please fill in all fields');
    }
}


const deleteTask = async (taskName) => {
    await fetch(`${serverURL}/tasks/${taskName}`, { method: 'DELETE' });
    loadTasks(); 
}


const editTask = async (taskName) => {
    const newName = prompt('Enter new task name:', taskName);
    if (newName && newName !== taskName) {
        const updatedTask = { name: newName };
        await fetch(`${serverURL}/tasks/${taskName}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask)
        })
        loadTasks(); 
    }
}


const taskCompletion = async (taskName) => {
    const task = { completed: true };
    await fetch(`${serverURL}/tasks/${taskName}/complete`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
    loadTasks(); 
}


addButton.addEventListener('click', addTask);
window.addEventListener('load', loadTasks);
