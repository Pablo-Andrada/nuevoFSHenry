import './App.css'
import React, { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [characters, setCharacters] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);

  console.log(detail);
  console.log(id);
  
  const handleOnClick = (id) => {
    setId(id);
    setDetail(true);
  };

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  },[])
  return (
    <div>
      {
        characters.map((character) => {
          return <Card key={character.id} character={character} handleOnClick={handleOnClick} />
        })
      }
    </div>
  ); 
}

export default App
