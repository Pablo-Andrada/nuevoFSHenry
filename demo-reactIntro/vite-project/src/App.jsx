// // Importamos los estilos, React, useState, useEffect y los componentes necesarios.
// import './App.css';
// import React, { useState, useEffect } from 'react';
// import Card from './Card';
// import Detail from './Detail';

// function App() {
//   // Estado para almacenar la lista de personajes.
//   const [characters, setCharacters] = useState([]);
//   // Estado para controlar si se muestra el modal de detalle.
//   const [detail, setDetail] = useState(false);
//   // Estado para almacenar el id del personaje seleccionado.
//   const [id, setId] = useState(0);

//   // Imprime en consola el estado para depuración.
//   console.log(detail);
//   console.log(id);
  
//   // Función que se ejecuta al hacer clic en "Ver detalle" en una Card.
//   // Actualiza el id y activa el modal.
//   const handleOnClick = (id) => {
//     setId(id);
//     setDetail(true);
//   };

//   // Función para cerrar el modal.
//   const handleOnClose = () => {
//     setDetail(false);
//   };

//   // useEffect que se ejecuta al montar el componente, para obtener la lista de personajes.
//   useEffect(() => {
//     fetch('https://hp-api.onrender.com/api/characters')
//       .then((response) => response.json())
//       .then((data) => setCharacters(data));
//   },[]);

//   return (
//     <div>
//       {/* Se renderizan las Card para cada personaje */}
//       {
//         characters.map((character) => {
//           return (
//             <Card 
//               key={character.id} 
//               character={character} 
//               handleOnClick={handleOnClick} 
//             />
//           );
//         })
//       }
//       {/* Se renderiza el modal Detail solo cuando 'detail' es true y se le pasa el id seleccionado */}
//       {detail && <Detail id={id} handleOnClose={handleOnClose} />}
//     </div>
//   ); 
// }

// export default App;
import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Card';
import Detail from './Detail';

function App() {
  // Estado para almacenar la lista de personajes
  const [characters, setCharacters] = useState([]);
  // Estado para controlar la visibilidad del modal de detalles
  const [detail, setDetail] = useState(false);
  // Estado para almacenar el ID del personaje seleccionado
  const [id, setId] = useState(null);
  // Estado para filtrar personajes por casa
  const [selectedHouse, setSelectedHouse] = useState('');

  // Función que se ejecuta al hacer clic en "Ver detalle"
  const handleOnClick = (id) => {
    setId(id); // Guarda el ID del personaje seleccionado
    setDetail(true); // Muestra el modal de detalles
  };

  // Función para cerrar el modal de detalles
  const handleOnClose = () => {
    setDetail(false); // Oculta el modal
  };

  // Función para manejar el filtro por casa
  const handleFilter = (house) => {
    setSelectedHouse(house);
  };

  // Efecto que se ejecuta al montar el componente para obtener la lista de personajes
  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((data) => setCharacters(data)); // Almacena los datos en el estado
  }, []);

  return (
    <div>
      {/* Botones para filtrar por casa */}
      <div>
        <button onClick={() => handleFilter('Gryffindor')}>Gryffindor</button>
        <button onClick={() => handleFilter('Slytherin')}>Slytherin</button>
        <button onClick={() => handleFilter('Hufflepuff')}>Hufflepuff</button>
        <button onClick={() => handleFilter('Ravenclaw')}>Ravenclaw</button>
        <button onClick={() => handleFilter('')}>Mostrar todos</button>
      </div>

      {/* Renderiza las tarjetas de personajes, filtrando si hay una casa seleccionada */}
      {characters
        .filter((character) => selectedHouse === '' || character.house === selectedHouse)
        .map((character) => (
          <Card key={character.id} character={character} handleOnClick={handleOnClick} />
        ))}

      {/* Renderiza el modal solo si "detail" es true */}
      {detail && <Detail id={id} handleOnClose={handleOnClose} />}
    </div>
  );
}

export default App;
