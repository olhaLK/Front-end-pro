import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());


const port = 5500;
const tasksDB = [];


app.get('/tasks', (request, response) => {
    response.send(tasksDB);
});


app.post('/tasks', (request, response) => {
    const { name, priority, details } = request.body;
    const newTask = {
        name,
        priority,
        details
    };

    tasksDB.push(newTask);
    response.send(newTask);
});


app.delete('/tasks/:name', (request, response) => {
    const { name } = request.params;
    const index = tasksDB.findIndex(task => task.name == name);
    if (index === -1) {
        return response.sendStatus(404);
    }

    tasksDB.splice(index, 1);
    response.sendStatus(200);
});


app.put('/tasks/:name/complete', (request, response) => {
    const { name } = request.params;
    const task = tasksDB.find(task => task.name === name);
    if (!task) {
        return response.sendStatus(404);
    }

    task.completed = true;
    response.send(task);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);  
});

