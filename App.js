import './App.css';
import Header from  "./Mycomponents/Header";
import {Todos} from "./Mycomponents/Todos";
import {Footer} from "./Mycomponents/Footer";
import AddTodo from './Mycomponents/AddTodo'; 
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("I am on Delete", todo);

     setTodos(todos.filter((e) => {
    return e!==todo;
  }))
  }

  const addTodo =(title , desc) => {
    console.log("I am adding this todo", title, desc);
    let sno = todos[todos.length-1].sno +1;
    const myTodo = {  
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

 
    const [todos, setTodos] = useState([ 
    {
      sno: 0,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done"
    },
    {
      sno: 1,
      title: "Go to the mall",
      desc: "You need to go to the mall to get this job done"
    },
    {
      sno: 2,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to get this job done"
    }
  ])
  return (
   <>
    <Header/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
  
   </>
 
  );
}

export default App;
