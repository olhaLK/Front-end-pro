import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());

const sessions = {};
const projectsStore = {};
const tasksStore = {};

// AUTH

app.post('/auth/login', (req, res) => {
  const { email, login, password } = req.body || {};

  if ((!email && !login) || !password) {
    return res.status(400).json({ message: 'email/login and password are required' });
  }

  const userId = uuidv4();
  const userLogin = login || email.split('@')[0];

  const user = {
    id: userId,
    login: userLogin,
    email: email || null,
    name: userLogin,
  };

  const sessionId = uuidv4();

  sessions[sessionId] = {
    userId,
  };

  projectsStore[userId] = [];
  tasksStore[userId] = [];

  return res.json({ ...user, sessionId });
});

// PROJECTS

app.get('/projects', (req, res) => {
  const sessionId = req.header('x-session-id');
  const session = sessions[sessionId];
  if (!session) return res.json([]);

  return res.json(projectsStore[session.userId]);
});

app.post('/projects', (req, res) => {
  const sessionId = req.header('x-session-id');
  const session = sessions[sessionId];
  if (!session) return res.status(401).json({ message: 'No session' });

  const newProject = {
    id: uuidv4(),
    ...req.body,
  };

  projectsStore[session.userId].push(newProject);
  return res.json(newProject);
});

app.delete('/projects/:projectId', (req, res) => {
  const sessionId = req.header('x-session-id');
  const session = sessions[sessionId];
  if (!session) return res.status(401).json({ message: 'No session' });

  const { projectId } = req.params;

  projectsStore[session.userId] =
    projectsStore[session.userId].filter(p => p.id !== projectId);

  tasksStore[session.userId] =
    tasksStore[session.userId].filter(t => t.projectId !== projectId);

  return res.json({ success: true });
});

// TASKS

app.get('/tasks/:projectId', (req, res) => {
  const sessionId = req.header('x-session-id');
  const session = sessions[sessionId];
  if (!session) return res.json([]);

  const { projectId } = req.params;
  return res.json(
    tasksStore[session.userId].filter(t => t.projectId === projectId)
  );
});

app.post('/tasks', (req, res) => {
  const sessionId = req.header('x-session-id');
  const session = sessions[sessionId];
  if (!session) return res.status(401).json({ message: 'No session' });

  const newTask = {
    id: uuidv4(),
    ...req.body,
  };

  tasksStore[session.userId].push(newTask);
  return res.json(newTask);
});

app.delete('/tasks/:taskId', (req, res) => {
  const sessionId = req.header('x-session-id');
  const session = sessions[sessionId];
  if (!session) return res.status(401).json({ message: 'No session' });

  const { taskId } = req.params;

  tasksStore[session.userId] =
    tasksStore[session.userId].filter(t => t.id !== taskId);

  return res.json({ success: true });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
