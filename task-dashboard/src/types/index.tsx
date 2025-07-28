//Task data structure :how the task is stored throughout the app (shows the application with Id)

export interface Task{
    id : string;
    title: string;
    description:string;
    status: 'pending' |'in-progress' | 'completed'  ;
    priority : 'low'|'medium' | 'high';
    dueDate ?: string;
}
//   data gets from task form without Id= form data

export interface TaskFormData{
    title: string;
    description:string;
    status: Task['status'];
    priority : Task['priority'];
    dueDate ?: string
}

// filter
export interface TaskFilter{

    status?: Task['status']
    priority?: Task['priority']
}

// COMPONENTs
//Taskform component - calls when a form submits with new task data

export interface TaskFormProps{
    onAddTask : (task: Omit <Task ,'id'>)=> void;
}
//TaskFilter component

export interface TaskFilterProps{
    filter: TaskFilter;
    onFilterChange:( filter: TaskFilter) =>void;
}
//props individual task item

export interface TaskItemProps{
    task :Task;                    //displays individual task data
    onDelete : (id:string)=>void;   //functioncalled- id passed to parent
    onStatusChange :(id:string , status : Task['status'])=>void;     // call back to update the task status
    onPriorityChange : (id:string, priority :Task['priority'])=>void;

}
// props for Tasklist

export interface TaskListProps{
    tasks: Task[];
    onDelete : (id:string )=>void;
    onStatusChange :(id:string, task:Task['status'])=> void;
     onPriorityChange?: (id: string, priority: Task['priority']) => void;
}