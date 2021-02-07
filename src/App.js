import React ,{useState, useEffect} from "react";
import './App.css';
import TodoForm from "./components/TodoForm.js";
import TodoList from "./components/TodoList.js";

function App() {
  const [inputTask, setinputTask] = useState(""); // For taking task in input
  const [todoList,settodoList] = useState([]);  // For rendering the tasks into list
  const [selectstatus, setStatus] = useState('all'); // For changing the status of todos
  const [filtertodos, setFiltertodos] = useState([]); // For filtering the todos inside list 
  const [edittodo, setEdittodo] = useState([]);
  // const [values, setvalues] = useState([]);

  // useEffect(()=>{
  //   const localvalues = JSON.parse(localStorage.getItem(todoList));
  //   if (localvalues){
  //     setvalues(localvalues);
  //     console.log(localvalues);
  //   }
  // },[todoList]);

  // useEffect(()=>{
  //   localStorage.setItem(values,JSON.stringify(values));
  // },[values]);
  
  useEffect(()=>{
    switch(selectstatus){
      case "completed":
          setFiltertodos(todoList.filter(todo => todo.completed === true));
          break;
      case "incomplete":
          setFiltertodos(todoList.filter(todo => todo.completed === false));
          break;
      default:
          setFiltertodos(todoList);
          break;
    
  } ;
}, [todoList, selectstatus]);


  
  return (
    <div className="App">
      <header>
        <h1>Add Some Tasks To Do</h1></header>
        <TodoForm setinputTask={setinputTask}
                  todoList={todoList} 
                  settodoList={settodoList}
                  inputTask={inputTask}
                  selectstatus={selectstatus}
                  setStatus={setStatus}
                  />
        <TodoList edittodo={edittodo} 
                  setEdittodo={setEdittodo}
                  filtertodos={filtertodos} 
                  todoList={todoList} 
                  settodoList={settodoList}/>
        
    </div>
  );
}

export default App;
