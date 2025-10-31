import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


const port = 5500;
const tasksDB = [];


app.get('/tasks', (request, response) => {
    response.json(tasksDB);
});


app.post('/tasks', (request, response) => {
    const { name, priority, details, completed = false } = request.body;
    const newTask = {
        name,
        priority,
        details,
        completed
    };

    tasksDB.push(newTask);
    res.status(201).json(newTask);
});


app.delete('/tasks/:name', (request, response) => {
    const { name } = request.params;
    const index = tasksDB.findIndex(task => task.name === name);
    if (index === -1) {
        return response.sendStatus(404);
    }

    tasksDB.splice(index, 1);
    response.sendStatus(200);
});


app.put('/tasks/:name', (request, response) => {
    const { name } = request.params;
    const task = tasksDB.find(task => task.name === name);
    if (!task) {
        return response.sendStatus(404);
    }

    const { newName, priority, details, completed } = request.body;
    if (typeof newName === 'string') task.name = newName;
    if (typeof priority === 'string') task.priority = priority;
    if (typeof details === 'string') task.details = details;
    if (typeof completed === 'boolean') task.completed = completed;

    response.json(task);
});


app.put('/tasks/:name/complete', (request, response) => {
    const { name } = request.params;
    const task = tasksDB.find(task => task.name === name);
    if (!task) {
        return response.sendStatus(404)
    }

    if (typeof request.body?.completed === 'boolean') {
        task.completed = request.body.completed;
    } else {
        task.completed = !task.completed;
    }
    response.json(task);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

