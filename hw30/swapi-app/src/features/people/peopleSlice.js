import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPeople = createAsyncThunk(
    'people/fetchPeople',
    async () => {
        const response = await axios.get('https://swapi.dev/api/people/');
        return response.data.results;
    }
)

export const peopleAdapter = createEntityAdapter({
    selectId: (person) => person.url,
})

const initialState = peopleAdapter.getInitialState({
    status: 'idle',
    error: null,
})

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        deletePerson: peopleAdapter.removeOne,
        addPerson: peopleAdapter.addOne,
        setPeople: peopleAdapter.setAll,
        clearPeople: peopleAdapter.removeAll,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeople.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            }) 
            .addCase(fetchPeople.fulfilled, (state, action) => {
                state.status = 'succeeded';
                peopleAdapter.setAll(state, action.payload);
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
                peopleAdapter.removeAll(state);
            })
    }
})

export const { deletePerson, addPerson, setPeople, clearPeople } = peopleSlice.actions;

export const {
    selectAll: selectAllPeople,
    selectById: selectPersonById,
} = peopleAdapter.getSelectors((state) => state.people);


export default peopleSlice.reducer;