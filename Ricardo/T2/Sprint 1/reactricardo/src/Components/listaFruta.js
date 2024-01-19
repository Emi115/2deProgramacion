import React from 'react';
import './App.css'; // Asegúrate de importar tu archivo CSS

const ListaDeFrutas = ({ frutas }) => {
    return (
        <ul className="listaSinPuntos">
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
