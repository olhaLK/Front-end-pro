import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './features/projects';
import tasksReducer from './features/tasks';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    tasks: tasksReducer,
  },
});