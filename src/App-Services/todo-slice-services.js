import {nanoid,createSlice} from "@reduxjs/toolkit"

const initialState = {
    todo:[]
}

const todoSlices =  createSlice({
    name:"Todo-Slices",
    initialState:initialState,
    reducers: {
        addTodo: (state,action)=>{
            const eachTodo = {
                id:nanoid(),
                title: action.payload.title,
                isCompleted:false
            }
            state.todo.push(eachTodo);
        },
        deleteTodo: (state,action)=>{
            state.todo = state.todo.filter((eachTodo)=> eachTodo.id !== action.payload.id);
          
        }
    }
});

export const  {addTodo,deleteTodo} = todoSlices.actions;
export const todoReducers = todoSlices.reducer;
