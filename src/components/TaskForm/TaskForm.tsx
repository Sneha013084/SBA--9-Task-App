import { useState } from 'react';
import type {TaskFormProps} from "../../types";

export default function TaskForm({onAddTask} :TaskFormProps){
    const [formData , setFormData] =useState({

        title: '',
        description: '',
        status: 'pending',
        priority: 'low',
        dueDate :'',
    })

    // when user adding a trask => event occurs  and this handle will work
   const handleChange =(event:React.ChangeEvent < HTMLInputElement | HTMLSelectElement>) =>{
        const {name ,value} = event.target;
        setFormData(prev =>({...prev, [name]:value}));
   };     
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // stop page reload
        const newtask:Task={
            id:Date.now(),
            ...formData
        }
        onAddTask(formData); 
        setFormData({ 
        title: '',
        description: '',
        status: 'pending',
        priority: 'low',
        dueDate :'',   }) ;   // send the data to the parent by calling onaddtask function
        }
 return (
     <form onSubmit={handleSubmit}>   

      <input name='title' value ={formData.title} onChange ={handleChange} />
      <input name = 'description' value ={formData.description} onChange = {handleChange} />
      <select name='status' value = {formData.status} onChange = {handleChange}>
        <option value ='pending'>Pending</option>
        <option value ='in-progress'> In Progress</option>
        <option value ='completed'> Completed </option>
      </select>
      <select name='priority' value = {formData.priority} onChange = {handleChange}>
        <option value ='low'> Low </option>
        <option value ='medium'> Medium</option>
        <option value ='high'> High</option>
      </select>
       <input name='dueDate' value ={formData.dueDate} onChange ={handleChange} />
       <button type='submit'> Add Task</button>
      
    </form>
  );
};

        


