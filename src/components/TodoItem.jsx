import React from 'react';

const TodoItem = ({ todo, updateTodo, removeTodo }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none', flex: 1 }}>
        {todo.text}
      </span>
      <span style={{ marginLeft: '10px', fontSize: '0.8em', color: 'gray' }}>
        {formatDate(todo.timestamp)}
      </span>
      <div style={{ display: 'flex', marginLeft: '10px' }}>
        <button onClick={() => updateTodo(todo.id)} aria-label="Toggle todo">
          <i className="fas fa-check"></i>
        </button>
        <button onClick={() => removeTodo(todo.id)} aria-label="Delete todo item">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

