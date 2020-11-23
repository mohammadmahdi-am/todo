import React,{useState,useEffect} from "react";
import Form from './components/Form'
import Todolist from './components/Todolist'
import "./App.css";

function App() {
  const [inputText , setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus]= useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);
  

  // useEffect(()=>{
  //   getLocalTodos();
  // },[])


  useEffect(()=>{
    filteredHandler();
    // saveLocalTodos();
  },[todos,status])
  const filteredHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter( todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter( todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos) ;
        break;

    }
  }

  // const saveLocalTodos = () => {
    
  //     localStorage.setItem('todos',JSON.stringify([]))
    
  // }

  // const getLocalTodos = () =>{
  //   if(localStorage.getItem('todos')===null){
  //     localStorage.setItem('todos',JSON.stringify([]))
  //   }else{
  //     let todoLocal = localStorage.setItem('todos',JSON.stringify(todos))
  //     setTodos(todoLocal)
  //   }
  // }

  return (
    <div className="App">
      <header>
  <h1>Ed's Todo List {inputText}</h1>
      </header>
      <Form setInputText={setInputText} setTodos={setTodos} todos={todos} setStatus={setStatus} inputText={inputText}/>

      <Todolist filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
