import {configureStore} from "@reduxjs/toolkit"
import { todoReducers } from "../App-Services/todo-slice-services";

export const AppStore = configureStore({
    reducer: todoReducers
});