import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

const todosAdapter = createEntityAdapter<Todo>();

const initialState = todosAdapter.getInitialState();

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: todosAdapter.addOne,
        toggleTodo: (state, action) => {
            const id = action.payload;
            const todo = state.entities[id];
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        removeTodo: todosAdapter.removeOne
    }
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export const {
    selectAll: selectAllTodos
} = todosAdapter.getSelectors((state: any) => state.todos);

export default todosSlice.reducer;