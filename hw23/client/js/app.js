import '../sass/style.scss';


const inputTaskName = document.getElementById('name');
const selectedPriority = document.getElementById('priority');
const textDetails = document.getElementById('details');
const addButton = document.querySelector('.add-btn');
const taskList = document.getElementById('task-list');


const serverURL = 'http://localhost:5500';


let tasksCache = [];


const loadTasks = async () => {
    const response = await fetch(`${serverURL}/tasks`);
    const tasks = await response.json();
    tasksCache = Array.isArray(tasks) ? tasks.slice() : [];
    updateList(tasks);
}


const updateList = (tasks) => {
    taskList.innerHTML = '';

    const priorities = { high: 1, medium: 2, low: 3 };

    tasks.sort((a, b) => {
        return priorities[a.priority] - priorities[b.priority]
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
            <button onclick="toggleDetails('${task.name}')">Details</button>
            <button onclick="deleteTask('${task.name}')">Delete</button>
        `;
        taskList.appendChild(taskItem);
    })
}


const addTask = async (event) => {
    event.preventDefault();

    const name = inputTaskName.value.trim();
    const priority = selectedPriority.value;
    const details = textDetails.value.trim();

    if (name && priority && details) {
        const task = { name, priority, details, completed: false };
        await fetch(`${serverURL}/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(task)
        })

        inputTaskName.value = '';
        textDetails.value = '';
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
    if (!newName) return;

    const newDetails = prompt('Enter new task details:');
    if (newDetails == null) return;

    await fetch(`${serverURL}/tasks/${taskName}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newName, details: newDetails })
    })
    loadTasks();
}


const showDetails = async (taskName) => {
    const task = tasksCache.find(t => t.name === taskName);
    if (task) {
        alert(`Details for "${task.name}":\n\n${task.details || '(no details)'}`);
    } else {
        const response = await fetch(`${serverURL}/tasks`);
        const tasks = await response.json();
        tasksCache = Array.isArray(tasks) ? tasks.slice() : [];
        const t = tasksCache.find(task => task.name === taskName);
        if (task) {
            alert(`Details for "${task.name}":\n\n${t.details || '(no details)'}`)
        }
    }
}


const toggleTaskCompletion = async (taskName) => {
    const index = tasksCache.findIndex(task => task.name === taskName);

    if (index !== -1) {
        const prev = tasksCache[index].completed;
        tasksCache[index].completed = !prev;
        updateList(tasksCache);

        await fetch(`${serverURL}/tasks/${taskName}/complete`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })

        loadTasks();
    } else {
        await fetch(`${serverURL}/tasks/${taskName}/complete`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })

        loadTasks();
    }
}


window.deleteTask = deleteTask;
window.editTask = editTask;
window.toggleTaskCompletion = toggleTaskCompletion;
window.toggleDetails = showDetails;

addButton.addEventListener('click', addTask);
window.addEventListener('load', loadTasks);