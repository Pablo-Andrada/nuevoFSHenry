// Importamos los estilos del módulo y los hooks necesarios de React.
import styles from "./Detail.module.css";
import { useState, useEffect } from "react";

// Componente Detail: muestra en un "modal" los detalles completos de un personaje.
// Recibe el id del personaje y la función para cerrar el modal.
const Detail = ({ id, handleOnClose }) => {
  // Estado para almacenar la información del personaje.
  // Se inicializa como un objeto vacío, esperando recibir los datos.
  const [character, setCharacter] = useState({});

  // useEffect se ejecuta cada vez que cambia el valor de "id".
  // Realiza una petición a la API para obtener el detalle del personaje.
  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => response.json()) // Convertimos la respuesta a JSON.
      .then((data) => {
        // La API devuelve un array con un solo objeto, por lo que se toma el primer elemento.
        setCharacter(data[0]);
      })
      .catch((error) => {
        console.error("Error al obtener el personaje:", error);
      });
  }, [id]); // Se vuelve a ejecutar el efecto cuando el id cambia.

  // Mientras no se tengan los datos del personaje, se muestra un mensaje de "Cargando..."
  if (!character || !character.name) {
    return (
      <div className={styles.modal}>
        <h3>Cargando ...</h3>
      </div>
    );
  }

  // Una vez que se han obtenido los datos, se muestra la información en el modal.
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        {/* Se muestra el nombre, la casa y la imagen del personaje */}
        <h2>{character.name}</h2>
        <h3>{character.house}</h3>
        <img 
          src={character.image} 
          alt={character.name} 
          className={styles.image}
        />
        <br />
        {/* Botón para cerrar el modal */}
        <button className={styles.button} onClick={handleOnClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Detail;
