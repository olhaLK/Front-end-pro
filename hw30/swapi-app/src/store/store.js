import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../features/people/peopleSlice';
import planetsReducer from '../features/planets/planetsSlice';
import starshipsReducer from '../features/starships/starshipsSlice';


export const store = configureStore({
    reducer: {
        people: peopleReducer,
        planets: planetsReducer,
        starships: starshipsReducer,
    },
})