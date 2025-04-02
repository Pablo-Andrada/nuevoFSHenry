// Componente Card: muestra la información básica de un personaje.
// Recibe el objeto character y la función handleOnClick para abrir el modal.
const Card = ({ character, handleOnClick }) => {
    // Se extraen las propiedades name, house e id del personaje.
    const { name, house, id } = character;
  
    return (
      <div>
        {/* Muestra el nombre y la casa */}
        <h2>{name}</h2>
        <h3>{house}</h3>
        {/* Al hacer clic se llama a handleOnClick pasando el id */}
        <button onClick={() => handleOnClick(id)}>Ver detalle</button>     
      </div>
    );
  };
  
  export default Card;
  