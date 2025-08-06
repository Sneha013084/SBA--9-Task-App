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

    
// // to add a new task= keep the previous task along with the new tasks

   function handleAddTask(newTask: Task) {
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

  // Handler to change filter options

  function handleFilterChange(newFilter: TaskOptions) {
    setFilter(newFilter);
  }

  // Handler to delete a task by id

  function handleDeleteTask(taskId: string) {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  }

  // Handler to update task status by id

  function handleStatusChange(taskId: string, newStatus: string) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  // Handler to update task priority by id

  function handlePriorityChange(taskId: string, newPriority: string) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, priority: newPriority } : task
      )
    );
  }

  // Filter tasks based on filter state

  const filteredTasks = tasks.filter(task => {
    // Example: if filter.status is 'all' or undefined, show all

    if (filter.status && filter.status !== 'all' && task.status !== filter.status) {
      return false;
    }
    // Add more filter criteria as needed, e.g., priority

    if (filter.priority && filter.priority !== 'all' && task.priority !== filter.priority) {
      return false;
    }
    return true;
  });


    return(
    <div>
       <h1>Task Dashboard</h1> 
       <TaskForm
       onAddTask={handleAddTask} />
       <TaskFilter filter={filter} onFilterChange={handleFilterChange} />
       <TaskList
          tasks={filteredTasks}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
          onPriorityChange={handlePriorityChange}
       />
    </div>
       
    );
   }


