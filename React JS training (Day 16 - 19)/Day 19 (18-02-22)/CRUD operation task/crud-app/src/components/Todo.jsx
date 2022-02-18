import React from 'react'

const Todo = (props) => {
  return (
    <>
    <div className="list-group">
        {props.tasks.map(item=>{
            return(
                <div className='taskList'>
                    <li className="list-group-item mt-1">
                        {item.taskTitle} <br/>
                        {item.taskDescription} <br/>
                    <button className='btn btn-danger mt-1 mx-1' onClick={()=>props.deleteTask(item.taskTitle)}>Delete task</button>
                    <button className='btn btn-info mt-1 mx-1' onClick={()=>props.editTask(item.taskTitle)}>Edit task</button>
                    </li>

                </div>
            )
        })}
    </div>
    </>
  )
}

export default Todo