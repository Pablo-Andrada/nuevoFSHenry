import './App.css'
import { useState , useEffect} from 'react';
import Card from './components/Card';


function App() {
  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data)=> setCharacters(data))
  }, []);

  return (
    <>
      {
        characters.map((character) => {
          return <Card
            key={character.id}
            character={character}
          />
        })
      }
    </>
  )
}

export default App
