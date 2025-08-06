import React from 'react';
import type { TaskItemProps } from '../../types';

export default function TaskItem({
    task,
    onDelete,
    onStatusChange,
    onPriorityChange} :TaskItemProps){

    const handleStatusChange= (event:React.ChangeEvent<HTMLSelectElement>)=>{
        onStatusChange(task.id, event.target.value as typeof task.status);
    };

    const handlePriorityChange= (event:React.ChangeEvent<HTMLSelectElement>)=>{
        onPriorityChange(task.id, event.target.value as typeof task.priority);
    };

    return(

     <div style={{border:'1px solid black'}}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p> Due:{task.dueDate}</p>

    <div>
        <label>Status:</label>
        <select value={task.status} onChange={handleStatusChange}>
            <option value="pending">Pending</option>
             <option value="in-progress">In-Progress</option>
              <option value="completed">Completed</option>
        </select>
       
    </div>

    <div>
        <label>Priority:</label>
        <select value={task.priority} onChange={handlePriorityChange}>
            <option value="low"> Low </option>
             <option value="medium"> Medium</option>
              <option value="high"> High </option>
        </select>
        </div>
        <button onClick={() => onDelete(task.id)}> Delete</button>
       
    </div>















    )

    
    }
    

 