import React, { useState } from "react";
import { addTodo } from "../App-Services/todo-slice-services";
import { useDispatch } from "react-redux";

function TodoForm() {

    const [input, setinput] = useState("")
    const dispatch = useDispatch()
    function todoAdd(e) {
        e.preventDefault();
        if (input) {
            dispatch(addTodo({ title:input}))  
        }
        setinput("");
     }
    addTodo();
    return (
        <form className="flex" onSubmit={(e) => todoAdd(e)}>
          
            <input
                value={input}
                onChange={(e) => {
        setinput(e.target.value)
                    console.log(e.target.value)
                }}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;