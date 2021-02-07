import React from "react";
import Todos from "./Todos.js";

// function todolist(){
const TodoList = ({todoList, settodoList, filtertodos}) =>{
    return(
        <div className="todo-container">
            <ul className="task-list">
                
                {filtertodos.map(todo => (
                    <Todos 
                    settodoList={settodoList} // passing this prop down to Todos.js
                    todoList ={todoList}    // passing this state prop down to todos.js
                    task={todo.task} 
                    todo ={todo}
                    key={todo.id}/>
                ))
                }
                
            </ul>

        </div>
    )
};
export default TodoList;
