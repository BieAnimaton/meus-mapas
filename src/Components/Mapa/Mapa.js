import React from 'react';

function Mapa(props) {
    return (
        <div>
            <h2 className="nome-materia">{props.titulo}</h2>
            <img src={props.image} alt={props.alt}/>
        </div>
    );
}

export default Mapa;