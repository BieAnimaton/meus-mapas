import React from 'react';

function Mapa(props) {
    return (
        <div className='mapa'>
            <h2 className="nome-materia">{props.titulo}</h2>
            <img src={props.image} alt={props.alt} />
            {props.textoExtra ?
                <h3 className='texto-extra'>{props.textoExtra}
                    <a href={props.link} target="_blank">{" " + props.textoExtra2}</a>
                </h3>
                : null}
        </div>
    );
}

export default Mapa;