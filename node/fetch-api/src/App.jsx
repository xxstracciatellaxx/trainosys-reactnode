import { useEffect,useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    const fetchData  = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json();
      setTodos(data)

    } catch (error) {
      console.log(error)
      throw error
    }
  };
  fetchData();

},[]);

  return (
    <>
      <h2>Fetch API</h2>
              <ol >
              {todos.map((todo) => (
                <li key={todo.id}>{todo.name}</li>
        ))}
        </ol>
    </>
  );
}

export default App;
