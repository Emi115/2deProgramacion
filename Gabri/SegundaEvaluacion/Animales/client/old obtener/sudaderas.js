let paginaActual = 1;

function ocultarMensajeError() {
  document.getElementById("errorMensaje").style.display = "none";
}

function mostrarMensajeError() {
  document.getElementById("errorMensaje").style.display = "block";
}

function cargarSudaderas() {
  ocultarMensajeError();
  fetch(`http://localhost:3000/sudadera?page=${paginaActual}`)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("sudaderasContainer");

      if (data.length === 0) {
        mostrarMensajeError();
        document.getElementById("cargarMasBtn").disabled = true;
        return;
      }

      data.forEach((sudadera) => {
        const card = document.createElement("div");
        card.classList.add("sudaderaCard");
        if (sudadera.stock <= 0) {
          card.classList.add("errorStock");
        }
        card.innerHTML = `
                    <img src="/fotos/${sudadera.foto}" alt="${sudadera.nombre}">
                    <h3>${sudadera.nombre}</h3>
                    <p>Precio: $${sudadera.precio}</p>
                `;
        container.appendChild(card);
      });
    })
    .catch((error) => {
      console.error("Error al cargar las sudaderas:", error);
      mostrarMensajeError();
    });
}

document.getElementById("cargarMasBtn").addEventListener("click", () => {
  paginaActual++;
  cargarSudaderas();
});

cargarSudaderas();
