import "./Detail.css"
import { useState,useEffect } from "react";

const Detail = ({ id, handleOnClose }) => {
    const [character, setCharacter] = useState({});

    useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data[0]))
    },[])


    return (
        <div className="modalDetail" >
            <img src={character?.image} />
            <h2>{character?.name}</h2>
            <br />
            <button onClick={handleOnClose} className="buttonDetail" >Cerrar</button>
        </div>
    );
};

export default Detail;