import { createContext, useContext } from 'react'
import './App.css'

const Context = createContext();

const sharedData = {
  theme: 'light',
  username: 'Juan',
};

function App() {
  return (
    <Context.Provider value={sharedData}>
      <ChildComponent />
    </Context.Provider>
  );
}

function ChildComponent() {

  const { theme, username } = useContext(Context);

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default App;