import React, { useState } from 'react';
const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState(''); 

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]); 
      setNewTodo(''); 
    }
  };
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <form onSubmit={handleAddTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)} // Update newTodo state as user types
          placeholder="Enter a new todo"
          className="todo-input"
        />
        <button type="submit" className="todo-button">
          Add Todo
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <span>{todo}</span>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="delete-button"
            >
             ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
