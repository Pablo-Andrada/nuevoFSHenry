const Card = ({character, handleOnClick}) => {
    const { name, house, id, alternate_names,image } = character;

    return (
        <div>
            <h2>{name}</h2>
            <h3>{house}</h3>
            <p>{alternate_names[0]}</p>
            <img src={image} alt="" />
            <br />
            <button onClick={()=>handleOnClick(id)}>Ver detalle</button>
        </div>
    );
}

export default Card;