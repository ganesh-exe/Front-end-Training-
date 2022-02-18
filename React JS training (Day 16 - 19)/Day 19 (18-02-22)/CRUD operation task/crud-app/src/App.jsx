import './App.css';
import React, {useState} from 'react';
import Todo from './components/Todo';

function App() {
  let timeout
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [tasks, setTasks] = useState([
    {taskTitle:"Gym",taskDescription:"Go to gym in evening"},
    {taskTitle:"Doctor",taskDescription:"Visit in the noon"},
  ])
  const handleTitle=(event)=>{
    setTitle(event.target.value)
  }
  const handleDescription=(e)=>{
    setDescription(e.target.value)
  }
  

  const addalert=()=>{
    alert("Task added successfully")
  }
  const delalert=()=>{
    alert("Task deleted successfully")
  }
  const editalert=()=>{
    alert("Task updated successfully")
  }
 
  
  
  
  const addTask=()=>{
    setTasks([...tasks,{taskTitle:title,taskDescription:description}])
    setTitle("")
    setDescription("")
    setTimeout(addalert,500)
  }
 
  const deleteTask=(titleRef)=>{
    const taskList=tasks.filter(item=>item.taskTitle!==titleRef)
    setTasks(taskList);
    setTimeout(delalert,500)
  }
  
  const editTask=(titleRef)=>{
    const taskList=[...tasks]
    const index=tasks.findIndex(ele=>ele.taskTitle==titleRef)
    taskList[index]={taskTitle:title,taskDescription:description}
    setTasks(taskList)
    setTitle("")
    setDescription("")
    setTimeout(editalert,500)
  }
 
  console.log(tasks)
  return (
    <div className="main"> <strong style={{fontStyle:'italic'}}>To-do App</strong>
      <div className="App">
      <form>
        <input type="text" className="form-control mt-1" placeholder="Task title" onChange={handleTitle} value={title}></input>
        <input type="text" className="form-control mt-1" placeholder="Task description" onChange={handleDescription} value={description}></input>
        <button type="button" className="btn btn-primary mt-2 mb-1" onClick={addTask}>Add task</button>
     </form>
     <Todo tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
      </div>
    </div>
  );
}

export default App;
