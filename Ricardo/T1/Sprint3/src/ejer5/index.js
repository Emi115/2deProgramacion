function ordenarTabla(personas, columna) {
  // Definimos una variable para realizar un seguimiento del estado de orden actual
  if (!ordenActual) {
    ordenActual = "ascendente"; // La primera vez que se llama, orden ascendente
  } else if (ordenActual === "ascendente") {
    ordenActual = "descendente"; // En el siguiente clic, orden descendente
  } else {
    ordenActual = "ascendente"; // En el tercer clic, orden ascendente nuevamente
  }

  // Función de comparación para ordenar las filas
  function compararFilas(a, b) {
    const valorA = a[columna];
    const valorB = b[columna];

    if (ordenActual === "ascendente") {
      return valorA.localeCompare(valorB);
    }
    return valorB.localeCompare(valorA);
  }

  // Ordenar la tabla según la columna seleccionada y el orden actual
  personas.sort(compararFilas);

  // Crear una tabla HTML a partir de la tabla ordenada
  const tablaHTML = document.createElement("table");
  tablaHTML.innerHTML = `
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>DNI</th>
          <th>Tiene/No tiene hijos</th>
          <th>Fecha de nacimiento</th>
        </tr>
      </thead>
      <tbody>
        ${personas
          .map(
            (persona) => `<tr>
                <td>${persona.Nombre}</td>
                <td>${persona.Edad}</td>
                <td>${persona.DNI}</td>
                <td>${persona["Tiene/No tiene hijos"]}</td>
                <td>${persona["Fecha de nacimiento"]}</td>
              </tr>`
          )
          .join("")}
      </tbody>
    `;

  // Actualizar el contenido de la tabla en la página
  const tablaExistente = document.querySelector("table");
  if (tablaExistente) {
    tablaExistente.parentNode.replaceChild(tablaHTML, tablaExistente);
  } else {
    document.body.appendChild(tablaHTML);
  }
}

// Ejemplo de uso
const tabla = [
  {
    Nombre: "Ana",
    Edad: 25,
    DNI: "45678912B",
    "Tiene/No tiene hijos": "Tiene",
    "Fecha de nacimiento": "12/05/1998",
  },
  // ... (Añade más filas aquí)
];

ordenarTabla(tabla, "Nombre"); // Ordenar por Nombre (ascendente)
