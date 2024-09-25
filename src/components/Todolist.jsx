
import React, { useState } from 'react';

const Todolist = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new task(yung gagawin ha)"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Todolist;

