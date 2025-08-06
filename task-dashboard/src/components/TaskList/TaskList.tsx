
import React from 'react';
import TaskItem from './TaskItem'/
import type { TaskListProps } from '../../types';


export default function TaskList ({

        tasks,
        onDelete,
        onStatusChange,
        onPriorityChange} :TaskListProps){

            if(tasks.length ===0){
               
             return <p> No Tasks Found</p>
            }
     return(      

    <div>
       {tasks.map(task =>(
         <TaskItem
         
           key={task.id}
           task ={tasks}
           onDelete={onDelete}
           onStatusChange={onStatusChange}
           onPriorityChange ={onPriorityChange}
         
         />

       ))}
    </div>
     ) ; 
}




