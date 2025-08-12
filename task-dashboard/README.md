## Task Dashboard

used for :
      View tasks in the dashboard.

      Add new tasks using the task form.

      Change task status and priority.

      Delete tasks.

      Filter and search tasks by status, priority, and keyword.

## components created
    
TaskList : Displays the list of tasks by rendering multiple TaskItem components.

TaskItem: Represents a single task item. Handles UI for task details and user interactions like status or priority change, or delete.

TaskForm : A form component to add or edit tasks. Manages form inputs and validation.

TaskFilter:  Provides UI controls to filter tasks based on status, priority, or search keywords.

Dashboard : (Optional) Main container component that composes all other components into a cohesive dashboard 


The root React component.(App)

Manages the main state of the app (list of tasks).

Passes data and event handlers down to components like TaskList.

Handles functions like updating task status, priority, and deleting tasks.

## I created function for
handleStatusChange(taskId, newStatus) — updates the status of a specific task.

handlePriorityChange(taskId, newPriority) — updates the priority of a specific task.

handleDelete(taskId) — removes a task from the list.

##  Challenges face ##  
I encountered errors when passing props and struggled with type safety. The biggest challenge was that nothing was rendering in the browser initially.
