
// has to accept the handlers as Props

import React from 'react' ;
import type { TaskFilterProps } from "../../types";
import type {Task} from "../../types";

export default function TaskFilter( {filter , onFilterChange}:TaskFilterProps){
     const handleStatusChange =(event:React.ChangeEvent <HTMLSelectElement>) =>{
          onFilterChange ({...filter, status: event.target.value as Task['status']});
     }
    const handlePriorityChange= (event:React.ChangeEvent <HTMLSelectElement>)=>{
        onFilterChange({...filter, priority:event.target.value as Task ['priority']})
    }

    return (
  <div>
    <label htmlFor ="status-filter">Status</label>
    <select id='status-filter' value={filter.status || 'all'} onChange ={handleStatusChange}>
         <option value="pending">Pending </option>
          <option value ="In-progress"> In-Progress </option>
           <option value="completed"> Completed </option>
    </select>

   <label htmlFor ="priority-filter">Priority</label>
   <select id='priority-filter' value={filter.priority ||'all'} onChange ={handlePriorityChange}> 
     <option value="low">Low</option>
      <option value="medium"> Medium </option>
       <option value="high"> High</option>

   </select>
 </div>

    );
}