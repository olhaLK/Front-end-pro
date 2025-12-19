import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  data: [],
  loaded: false,
  error: null,
}

const PROJECTS_URL = "http://localhost:3000/projects";

const STORAGE_KEY = 'auth_user';

function getSessionId(thunkAPI) {
  const state = thunkAPI.getState();
  const fromRedux = state?.auth?.user?.sessionId;
  if (fromRedux) return fromRedux;

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw)?.sessionId ?? null;
  } catch {
    return null;
  }
}


export const getProjectsAsync = createAsyncThunk(
  "projects/getList",
  async (_, thunkAPI) => {
    const sessionId = getSessionId(thunkAPI);

    const { data } = await axios.get(PROJECTS_URL, {
      headers: { "x-session-id": sessionId },
    })

    return data;
  }
)

export const saveProjectAsync = createAsyncThunk(
  "projects/save",
  async (project, thunkAPI) => {
    const sessionId = getSessionId(thunkAPI);
    if (!sessionId) return thunkAPI.rejectWithValue("No sessionId");

    const { data } = await axios.post(PROJECTS_URL, project, {
      headers: { "x-session-id": sessionId },
    });

    return data;
  }
);

export const deleteProjectAsync = createAsyncThunk(
  "projects/delete",
  async (projectId, thunkAPI) => {
    const sessionId = getSessionId(thunkAPI);

    await axios.delete(`${PROJECTS_URL}/${projectId}`, {
      headers: { "x-session-id": sessionId },
    })

    return projectId;
  }
)

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    resetLoaded(state) {
      state.loaded = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjectsAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loaded = true;
        state.error = null;
      })
      .addCase(getProjectsAsync.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(saveProjectAsync.pending, (state) => {
        state.loaded = false;
        state.error = null;
      })
      .addCase(saveProjectAsync.fulfilled, (state, action) => {
        state.data.unshift(action.payload);
        state.loaded = true;
        state.error = null;
      })
      .addCase(saveProjectAsync.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(deleteProjectAsync.fulfilled, (state, action) => {
        state.data = state.data.filter((p) => p.id !== action.payload);
      })
      .addCase(deleteProjectAsync.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
})

export const { resetLoaded } = projectsSlice.actions;
export default projectsSlice.reducer;
