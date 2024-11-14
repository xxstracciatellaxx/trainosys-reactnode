import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState('Jannel')
  const [lastName, setLastName] = useState('Rivera')
const userName = null;
const hasName = true;
const anon = true;

console.log(count);

const handleChangeName = () => {
  setFirstName('Rivera')
}


const handleFirstNameChange = e => {
console.log(e.target.value);
setFirstName(e.target.value)
}

const handleLastNameChange = e => {
  console.log(e.target.value);
  setLastName(e.target.value)
  }

  return (
    <>
    <h2>useState</h2>
  <button onClick={() => setCount(count + 1)}>Counter: {count}</button>

<br></br>
  <div>Change First Name: {firstName}</div>
  <button onClick={handleChangeName}>Click here to change first name</button>


    <h2>Data Binding</h2>
    <h3>First Name: {firstName}</h3>
    <h3>Last Name: {lastName}</h3>
    <label>First Name: </label>
    <input 
      type="text"
      // value={firstName}
      placeholder='Enter your name'
      onChange={(e) => handleFirstNameChange(e)}/>
    <br/>
    <label>Last Name: </label>
    <input 
    type="text"
    placeholder='Enter your last name'
    onChange={(e) => handleLastNameChange(e)}
    // value={lastName}
    />

    <h2>Conditionals</h2>
    {userName ??'string'}


    <h3>{hasName && 'Kevin'}</h3>

    <h3>{anon ? 'Anon' : userName}</h3>
    </>
  )
}

export default App
