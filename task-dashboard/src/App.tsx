import { useState } from 'react'

import './App.css'
import TaskList from './components/TaskList/TaskList'
import type { Task, TaskStatus } from './types'

function App() {
const [tasks, setTasks] = useState <Task[]>([
{
      id: '1',
      title: 'Buy fruits',
      description: 'Apple, Orange, Banana',
      status: 'pending',
      priority: 'high',
      dueDate: '2025-03-05',
    },
    {
      id: '2',
      title: 'Finish household work',
      description: 'Cleaning, Mopping, Washing',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2025-04-05',
    },
    {
      id: '3',
      title: 'Do exercise',
      description: 'Running, push ups, Jumping',
      status: 'completed',
      priority: 'low',
      dueDate: '2025-06-22',
    },
  ])

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    )
  }

  const handleDelete = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId))
  }

  return (
    <div className='App'>
      <h1>Task Dashboard</h1>
    <main>
        <section>
      <TaskList
      tasks ={tasks}
      onStatusChange ={handleStatusChange}
      onDelete = {handleDelete}

      />
      </section>
      </main>
      </div>

  );
} 

  
export default App;
