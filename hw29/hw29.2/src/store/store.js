import { createStore } from "redux";

const ADD_TODO = 'ADD_TODO';


export const addTodo = (text) => ({ 
    type: ADD_TODO,
    payload: text, 
})


const initialState = {
    todos: [],
}


function todosReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: 
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        default:
            return state;
    }
}


export const store = createStore(todosReducer);