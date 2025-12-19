import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STORAGE_KEY = 'auth_user';

export const loginAsync = createAsyncThunk(
    'auth/login',
    async (values, { rejectWithValue }) => {
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                return rejectWithValue('Invalid login/email or password');
            }

            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const initialState = {
    user: null,
    isAuthenticated: false,
    status: 'idle',
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { 
        restoreAuth(state) {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                state.user = JSON.parse(raw);
                state.isAuthenticated = true;
            }
        },
        logout(state) {
            localStorage.removeItem(STORAGE_KEY);
            state.user = null;
            state.isAuthenticated = false;
            state.status = 'idle';
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user  = action.payload;
                state.isAuthenticated = true;
                localStorage.setItem(STORAGE_KEY, JSON.stringify(action.payload));
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
})


export const { restoreAuth, logout } = authSlice.actions;
export default authSlice.reducer;