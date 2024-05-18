import React, { useState } from 'react';
import './AddTaskForm.css';

interface AddTaskFormProps {
  addTask: (text: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTask(text);
      setText('');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add new task"
        className="input"
      />
      <button type="submit" className="button">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
