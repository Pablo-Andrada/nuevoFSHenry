import './App.css'
import Home from './components/Home'
import { useState,useEffect } from 'react'


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => setUsers(data))
    
  },[]);

  return (
    <>
      <Home users={users} />   
    </>
  )
}

export default App
