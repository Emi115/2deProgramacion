document.addEventListener("DOMContentLoaded", () => {
  const sudadera = JSON.parse(localStorage.getItem("sudaderaSeleccionada"));
  if (!sudadera) {
    console.error("No se encontró la información de la sudadera seleccionada.");
    // Redireccionar de vuelta o mostrar un mensaje de error adecuado
    return;
  }

  mostrarDetalle(sudadera);
});

function mostrarDetalle(sudadera) {
  const detalleSudadera = document.getElementById("detalleSudadera");
  detalleSudadera.innerHTML = generarHTMLDetalle(sudadera);
}

function generarHTMLDetalle(sudadera) {
  return `
    <img src="/fotos/${sudadera.foto}" alt="Foto de ${
    sudadera.nombre
  }" style="max-width: 200px; border-radius: 10px;">
    <h2>${sudadera.nombre}</h2>
    <p>Color: ${sudadera.color}</p>
    <p>Dibujo: ${sudadera.dibujo}</p>
    <p>Talla: ${sudadera.talla}</p>
    <p>Capucha: ${sudadera.capucha ? "Sí" : "No"}</p>
    <p>Precio: ${sudadera.precio}</p>
    <p>Descripción: ${sudadera.descripcion}</p>
    <p>Stock: ${sudadera.stock}</p>
`;
}
