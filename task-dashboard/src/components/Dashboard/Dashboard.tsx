import React, { useState} from 'react';
import type { Task, TaskOptions } from '../../types';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';

  export default function Dashboard(){

      //state variable- shows with empty array

      const [tasks, setTasks ]= useState<Task[]>([]);
      const [filter, setFilter] = useState <TaskOptions> ({});
    
      
      //function to handle the change in the textbox

    //   function handleInputChange(event){

      }
// // to add a new task= keep the previous task along with the new tasks
   const handl
        


        return statusFilter ==='all' || task.status ===statusFiletr;
    })

    return(
    <div>
       <h1>Task Dashboard</h1> 
       <TaskForm
       onAddTask={taskData} />
       <TaskFilter filter={filter} onFilterChange={handleFilterChange} />
       <TaskList
          tasks={filteredTasks}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
          onPriorityChange={handlePriorityChange}
       />
    </div>
       
    );


