import React from "react";
// import ReactDOM from "react-dom";


function TodoForm({setinputTask, settodoList, inputTask, todoList, setStatus}){

    // Handling input task 
    function inputTaskhandler(e) {
        // setinputTask(e.target.value);
        setinputTask(e.target.value);
        
    }

    //Handling Submitting of input task
    function addtaskhandler(e){
        e.preventDefault();
        // concatenating to do tasks and adding attributes in todo list array
        settodoList([...todoList,{task:inputTask , completed: false, id:Math.random()*10000}])
        setinputTask("");
    }

    function statusHandler(e){
        e.preventDefault();
        setStatus(e.target.value);
    }

    return(
        <>
            
            <form>
                <input type="text" className="todo-add" placeholder="Add some tasks..." value={inputTask} onChange={inputTaskhandler}></input>
                <button onClick={addtaskhandler} type="submit"className="add-btn"><i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} className="select-status">
                        <option value='all'>All</option>
                        <option value='completed'>Completed</option>
                        <option value='incomplete'>Incomplete</option>
                    </select>
                </div>
            </form>
          
        </>
    )
}


export default TodoForm;
