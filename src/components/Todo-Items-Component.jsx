import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { deleteTodo } from "../App-Services/todo-slice-services";


function TodoItem() {
    const todo = useSelector(state => state.todo);
    const dispatch = useDispatch();
   let deleteTodoHandler = (id) => {
       if (id) {
            dispatch(deleteTodo({id:id}))
        }
    }

    return (
        
        <>
            {todo.map((eachTodo => {
               return <ul key={eachTodo.id}>
                    <div
                        className={`flex border border-black/10 rounded-lg px-3 py-1.5 mb-2 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${eachTodo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                            }`}
                    >
                      
                        <input
                           type="text"
                           value={eachTodo.title}
                           readOnly
                            className={` outline-none w-full bg-transparent rounded-lg text-black "border-transparent"
                                } ${eachTodo.completed ? "line-through" : ""}`}
                           

                        />
                    
                        {/* Delete Todo Button */}
                        <button
                            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                           onClick={() => deleteTodoHandler(
                               eachTodo.id
                           )}
                        >
                            ❌
                        </button>
                    </div>
                </ul>
            }))}
        </>
    );
}

export default TodoItem;
