import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        return state.map(task => {
          if (task.id === action.id) {
            return { ...task, complete: !task.complete };
          } else {
            return task;
          }
        });
      default:
        return state;
    }
  };

  const taskList = [
    { id: 1, title: "eat", complete: false },
    { id: 2, title: "code", complete: true },
    { id: 3, title: "sleep", complete: false },
  ];

  const [todos, dispatch] = useReducer(reducerFunction, taskList);

  const handleCompleteTask = task => {
    dispatch({ type: "COMPLETE", id: task.id });
  };

  return (
    <>
      <h2>useReducer Hook</h2>
      {todos.map(task => (
        <div key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.complete}
              onChange={() => handleCompleteTask(task)}
            />
            <span style={{ textDecoration: task.complete ? "line-through" : "none", fontSize: '20px', fontWeight: 'bold'}}>
              {task.title}
            </span>
          </label>
        </div>
      ))}
    </>
  );
}

export default App;
