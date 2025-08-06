import { useState } from 'react'

import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import type { Task } from './types';

function App() {
// const [tasks, setTasks] = useState <Task[]>

  return (
    <div className='App'>
      <h1>Task Dashboard</h1>
    <main>
        <section>
      <TaskList
      tasks ={tasks}
      onAddTask= {onAddTask}
      onStatusChange ={handleStatusChange}
      OnDelete = {handleDelete}

      />
      </section>
      </main>
      </div>

  );
} 

  
export default App;
