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
  let fotosSecundariasHTML = "";
  if (sudadera.fotosSecundarias && sudadera.fotosSecundarias.length > 0) {
    fotosSecundariasHTML = sudadera.fotosSecundarias
      .map(
        (foto) =>
          `<img src="/fotos/${foto}" alt="Foto secundaria de ${sudadera.nombre}" class="foto-secundaria">`
      )
      .join("");
  }
  // Incluye aquí el contenedor fotitos
  return `
      <div id="fotitos"> <!-- Contenedor fotitos agregado -->
        <img id="fotoPrincipal" src="/fotos/${sudadera.foto}" alt="Foto de ${
    sudadera.nombre
  }">
        <div id="contenedorFotosSecundarias">${fotosSecundariasHTML}</div>
      </div>
      
      <div class="detalle-producto">
          <h2>${sudadera.nombre}</h2>
          <p>Color: ${sudadera.color}</p>
          <p>Dibujo: ${sudadera.dibujo}</p>
          <p>Talla: ${sudadera.talla}</p>
          <p>Capucha: ${sudadera.capucha ? "Sí" : "No"}</p>
          <p>Precio: ${sudadera.precio}€</p>
          <p>Descripción: ${sudadera.descripcion}</p>
          <p>Stock: ${sudadera.stock}</p>
      </div>
  `;
}

window.addEventListener("DOMContentLoaded", (event) => {
  const fotosSecundarias = document.querySelectorAll(
    "#contenedorFotosSecundarias img"
  );
  fotosSecundarias.forEach((foto) => {
    foto.addEventListener("click", function () {
      const fotoPrincipal = document.getElementById("fotoPrincipal");
      [fotoPrincipal.src, this.src] = [this.src, fotoPrincipal.src];
    });
  });
});
