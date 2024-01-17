import React from 'react';

const ListaDeFrutas = ({ frutas }) => {
    return (
        <ul>
            {frutas.map((fruta, index) => (
                <li key={index}>
                    {fruta.nombre}
                    <img src={fruta.urlImagen} alt={fruta.nombre} style={{ width: '100px', height: '100px' }} />
                </li>
            ))}
        </ul>
    );
};

export default ListaDeFrutas;
