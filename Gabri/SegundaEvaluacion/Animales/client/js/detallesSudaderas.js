document.addEventListener("DOMContentLoaded", () => {
  const sudadera = JSON.parse(localStorage.getItem("sudaderaSeleccionada"));
  if (!sudadera) {
    console.error("No se encontró la información de la sudadera seleccionada.");
    return;
  }

  mostrarDetalle(sudadera);
});

function mostrarDetalle(sudadera) {
  const detalleSudadera = document.getElementById("detalleSudadera");
  detalleSudadera.innerHTML = generarHTMLDetalle(sudadera);
  cargarFotosSecundarias(sudadera);
}

function generarHTMLDetalle(sudadera) {
  // Inicializar el HTML para fotos secundarias
  let fotosSecundariasHTML = "";
  if (sudadera.fotosSecundarias && sudadera.fotosSecundarias.length > 0) {
    fotosSecundariasHTML = sudadera.fotosSecundarias
      .map(
        (foto) =>
          `<img src="/fotos/${foto}" alt="Foto secundaria de ${sudadera.nombre}" style="max-width: 100px; margin: 5px; border-radius: 5px;">`
      )
      .join("");
  }

  // Asegúrate de asignar el ID 'fotoPrincipal' a la imagen principal y generar dinámicamente las fotos secundarias
  return `
    <img id="fotoPrincipal" src="/fotos/${sudadera.foto}" alt="Foto de ${
    sudadera.nombre
  }" style="max-width: 200px; border-radius: 10px;">
    <div id="contenedorFotosSecundarias">
      ${fotosSecundariasHTML}
    </div> <!-- Contenedor para fotos secundarias -->
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
window.addEventListener('DOMContentLoaded', (event) => {
  // Selecciona todas las imágenes secundarias
  const fotosSecundarias = document.querySelectorAll('#contenedorFotosSecundarias img');

  // Añade un event listener a cada imagen secundaria
  fotosSecundarias.forEach(foto => {
      foto.addEventListener('click', function() {
          // Al hacer clic en una foto secundaria, cambia la fuente de la foto principal
          const fotoPrincipal = document.getElementById('fotoPrincipal');
          // Intercambia la fuente (src) de la foto principal con la fuente de la foto secundaria
          [fotoPrincipal.src, this.src] = [this.src, fotoPrincipal.src];
      });
  });
});
