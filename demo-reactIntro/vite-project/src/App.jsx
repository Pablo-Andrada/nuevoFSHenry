import './App.css'
import CardList from './CardList'
import React, { useState, useEffect } from 'react';


function App() {
  
  const [contador, setContador] = useState(0);


  useEffect(() => {
    console.log("El contador cambió:", contador);    
  },[contador]);

  return (
  <div>
      <button onClick={()=>{setContador(contador + 1)}}> + </button>
      <p>Contador: {contador} </p>
      <button onClick={()=>{setContador(contador - 1)}}> - </button>

  </div>
  )
}

export default App
