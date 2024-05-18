import React from 'react';
import './Task.css';

interface TaskProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTaskCompletion: (taskId: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleTaskCompletion }) => {
  return (
    <div className="task">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        className="task-checkbox"
      />
      <span className={task.completed ? 'task-text completed' : 'task-text'}>
        {task.text}
      </span>
    </div>
  );
};

export default Task;
