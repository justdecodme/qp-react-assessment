import React, { useState } from 'react';
import Task from './Task';
import AddTaskForm from './AddTaskForm';
import './TodoApp.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Provide type Task[] explicitly

  const addTask = (text: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (taskId: number) => {
    setTasks(
      tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <h1 className="title">Todo App</h1>
      <AddTaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
};

export default TodoApp;
