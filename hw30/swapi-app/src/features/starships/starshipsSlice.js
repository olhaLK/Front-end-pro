import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchStarships = createAsyncThunk(
    'starships/fetchStarships',
    async () => {
        const response = await axios.get('https://swapi.dev/api/starships/');
        return response.data.results;
    }
)

export const starshipsAdapter = createEntityAdapter({
    selectId: (ship) => ship.url,
})

const initialState = starshipsAdapter.getInitialState({
    status: 'idle',
    error: null,
})

export const starshipsSlice = createSlice({
    name: 'starships',
    initialState,
    reducers: {
        deleteStarship: starshipsAdapter.removeOne,
        addStarship: starshipsAdapter.addOne,
        setStarships: starshipsAdapter.setAll,
        clearStarships: starshipsAdapter.removeAll,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStarships.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchStarships.fulfilled, (state, action) => {
                state.status = 'succeeded';
                starshipsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchStarships.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                starshipsAdapter.removeAll(state);
            });
    }
})

export const { deleteStarship, addStarship, setStarships, clearStarships } = starshipsSlice.actions;

export const {
    selectAll: selectAllStarships,
    selectById: selectStarshipById,
} = starshipsAdapter.getSelectors((state) => state.starships);

export default starshipsSlice.reducer;