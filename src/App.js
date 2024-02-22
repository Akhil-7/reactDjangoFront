import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([])
  // const [todo, setTodo] = useState()
  



  const getTodo = async () => {
    
    let response = await fetch('http://127.0.0.1:8000/api/getTodo/')
    let data = await response.json()
    setTodos(data)
  }

  const valFromForm = async (formData) =>{
    // setTodo(()=>({"body":formData}))
    fetch(`http://127.0.0.1:8000/api/readTodo/`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  })
  }
  useEffect (()=>{
    getTodo()
  },[])
  
  return (
    <div className="App backTest">
     <div className="content">
       <Form getData={valFromForm}/>
        {
          todos.map(
            (obj)=>{
              return(
                <TodoList key={obj.id} todo={obj.todo}/>
              )
            }
          )
        }
       
     </div>
     
    </div>
  );
}

export default App;
