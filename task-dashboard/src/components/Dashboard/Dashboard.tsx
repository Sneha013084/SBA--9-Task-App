import React, { useState} from 'react';
import type { Task } from '../../types';
import TaskFilter from 

  export default function Dashboard(){
      //state variable- shows with empty array

      const [tasks, setTasks ]= usestate<Task[]>([]);
      const [statusFilter, setStatusFilter] = usestate <string> ('all');
      const [priorityFilter, setPriorityFilter] = usestate <string> ('all');
      

      //function to handle the change in the textbox

    //   function handleInputChange(event){

      }
// to add a new task= keep the previous task along with the new tasks
   const handleAddTask = (newTask:Task) =>{
    setTasks(prev=>[..prev, newTask]);

 };
 //Delete task= previous value of the task arry updated with current ,filter function do filtering with the id(keep all the taskes that doesn't match with the id)

  const handleDeleteTask(id:string)=>{
    setTasks(prev=>prev.filter(task=>task.id!==id))

 }

 //Filter logic= update filter state whenever user changes the option and set new filter value

 const handleStatusChange(newStatus:string )=>{
    setStatusFilter(newStatus)
 }
 //
    const handlePriorityChange = (newPriority:string)=>{
        setPriorityFilter(newPriority);
    }

 //to  update the task with newly set filter value

    const filteredTasks= tasks.filter(task =>{
        const updatedStatus = statusFilter ==='all'|| task.status ===statusFilter
        const updatedPriority = priorityFilter==='all'|| task.priority===priorityFilter
        


        return statusFilter ==='all' || task.status ===statusFiletr;
    })

    return(
    <div>
       <h1>Task Dashboard</h1> 
       
    
    </>) 


