import React from 'react';
import { useParams } from 'react-router-dom';

const PerfilUsuario = () => {
  // Extrayendo el ID del usuario de los parámetros de la ruta
  const { id } = useParams();

  return (
    <div>
      <h2>Perfil del Usuario: {id}</h2>
      {/* Puedes agregar más detalles del usuario aquí */}
      Hola buenos dias
    </div>
  );
};

export default PerfilUsuario;
