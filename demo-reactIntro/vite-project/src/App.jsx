// Importamos los estilos, React, useState, useEffect y los componentes necesarios.
import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Detail from './Detail';

function App() {
  // Estado para almacenar la lista de personajes.
  const [characters, setCharacters] = useState([]);
  // Estado para controlar si se muestra el modal de detalle.
  const [detail, setDetail] = useState(false);
  // Estado para almacenar el id del personaje seleccionado.
  const [id, setId] = useState(0);

  // Imprime en consola el estado para depuración.
  console.log(detail);
  console.log(id);
  
  // Función que se ejecuta al hacer clic en "Ver detalle" en una Card.
  // Actualiza el id y activa el modal.
  const handleOnClick = (id) => {
    setId(id);
    setDetail(true);
  };

  // Función para cerrar el modal.
  const handleOnClose = () => {
    setDetail(false);
  };

  // useEffect que se ejecuta al montar el componente, para obtener la lista de personajes.
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data));
  },[]);

  return (
    <div>
      {/* Se renderizan las Card para cada personaje */}
      {
        characters.map((character) => {
          return (
            <Card 
              key={character.id} 
              character={character} 
              handleOnClick={handleOnClick} 
            />
          );
        })
      }
      {/* Se renderiza el modal Detail solo cuando 'detail' es true y se le pasa el id seleccionado */}
      {detail && <Detail id={id} handleOnClose={handleOnClose} />}
    </div>
  ); 
}

export default App;
