import TaskForm from './components/TaskForm.js'
import './App.css';
import TaskList from './components/TaskList.js';
import { useState,useEffect } from 'react';


function App() {

  const [tasks,setTasks]=useState([]);
  const [filter,setFilter]=useState("All");

  async function getTasks(){
    const result=await fetch('http://localhost:4000/api/tasks',{
      'method':'get',
    })
    const res = await result.json()
    setTasks(res)
  }
    useEffect(()=>{
    getTasks()
    

  },[])
  
  return (
    <div className='card'>
      <h1>Tasks App:</h1>
     <TaskForm setTasks={setTasks}/>
     <TaskList tasks={tasks} setTasks={setTasks} filter={filter} setFilter={setFilter}/>
     
    </div>
  );
}

export default App;
