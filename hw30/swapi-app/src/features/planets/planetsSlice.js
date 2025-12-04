import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPlanets = createAsyncThunk(
    'planets/fetchPlanets',
    async () => {
        const response = await axios.get('https://swapi.dev/api/planets/');
        return response.data.results;
    }
)

export const planetsAdapter = createEntityAdapter({
    selectId: (planet) => planet.url,
})

const initialState = planetsAdapter.getInitialState({
    status: 'idle',
    error: null,
})

export const planetsSlice = createSlice({
    name: 'planets',
    initialState,
    reducers: {
        deletePlanet: planetsAdapter.removeOne,
        addPlanet: planetsAdapter.addOne,
        setPlanets: planetsAdapter.setAll,
        clearPlanets: planetsAdapter.removeAll,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlanets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPlanets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                planetsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchPlanets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                planetsAdapter.removeAll(state);
            });
    }
})

export const { deletePlanet, addPlanet, setPlanets, clearPlanets } = planetsSlice.actions;

export const {
    selectAll: selectAllPlanets,
    selectById: selectPlanetById,
} = planetsAdapter.getSelectors((state) => state.planets);

export default planetsSlice.reducer;