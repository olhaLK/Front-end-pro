import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

/*
{
  id: string,
  title: string,
  description: string,
  priority: string,
  status: string,
  assignee: string,
  projectId: string,
}
*/

export const getTasksAsync = createAsyncThunk('tasks/getList', async (projectId = '', thunkAPI) => {
  const state = thunkAPI.getState();
  const sessionId = state.auth.user?.sessionId;
  const url = projectId ? `http://localhost:3000/tasks/${projectId}` : `http://localhost:3000/tasks`;
  const result = await axios.get(url, { headers: { 'x-session-id': sessionId } });
  return result.data;
});

export const deleteTaskAsync = createAsyncThunk('tasks/delete', async (taskId, thunkAPI) => {
  const state = thunkAPI.getState();
  const sessionId = state.auth.user?.sessionId;
  await axios.delete(`http://localhost:3000/tasks/${taskId}`, { headers: { 'x-session-id': sessionId } });
  return taskId;
});

export const saveTaskAsync = createAsyncThunk('tasks/save', async (task, thunkAPI) => {
  const state = thunkAPI.getState();
  const sessionId = state.auth.user?.sessionId;
  const result = await axios.post('http://localhost:3000/tasks', task, { headers: { 'x-session-id': sessionId } });
  return result.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(getTasksAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    })
    builder.addCase(deleteTaskAsync.fulfilled, (state, action) => {
      state.data = state.data.filter(task => task.id !== action.payload);
    })
  }
})

export default tasksSlice.reducer;