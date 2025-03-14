import './App.css'
import { useState , useEffect} from 'react';
import Card from './components/Card';
import Detail from './components/Detail';

function App() {
  const [characters, setCharacters] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);

  console.log(detail);
  console.log(id);
  
  const handleOnClick = (id) => {
    setId(id);
    setDetail(true);
  }

  const handleOnClose = () => {
    setDetail(false);
  }

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
    
    return () => {setId(0)}
  }, []);

  return (
    <>
      {
        characters.map((character) => {
          return <Card
            key={character.id}
            character={character}
            handleOnClick={handleOnClick}
          />
        })
      }
      {
        detail && <Detail
          id={id}
          handleOnClose={handleOnClose}
        />
      }
    </>
  )
}

export default App
