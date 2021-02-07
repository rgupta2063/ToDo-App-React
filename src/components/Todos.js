import React from "react";



const Todos = ({task,todo,settodoList, todoList}) =>{
    const deleteTaskhandler=()=>{
        settodoList(todoList.filter((el)=>el.id !== todo.id));
        // console.log(settodoList);
    };

    const completedHandler= () =>{
        settodoList(todoList.map((el) =>{
            if (el.id === todo.id){
                return {...el, completed: !el.completed};
            }
            return el;
        }
        ))
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed? "completed-task": " "}`}>{task}</li>
            <button onClick={completedHandler}className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteTaskhandler} className="delete-btn"><i className="fas fa-trash"></i></button>
            <button  className="delete-btn">Edit</button>
        </div>

    );

};

export default Todos;