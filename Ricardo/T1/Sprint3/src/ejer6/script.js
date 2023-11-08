const estudiantes = [
  { nombre: "Juan", ciudad: "Madrid", beca: false, edad: 21, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
  { nombre: "Ana", ciudad: "Barcelona", beca: true, edad: 20, calificaciones: { matematicas: 9, fisica: 6, historia: 8 } },
  { nombre: "Pedro", ciudad: "Madrid", beca: false, edad: 23, calificaciones: { matematicas: 4, fisica: 5, historia: 7 } },
  { nombre: "Maria", ciudad: "Sevilla", beca: true, edad: 19, calificaciones: { matematicas: 8, fisica: 7, historia: 9 } },
  { nombre: "Jose", ciudad: "Madrid", beca: false, edad: 22, calificaciones: { matematicas: 6, fisica: 7, historia: 5 } },
  { nombre: "Isabel", ciudad: "Valencia", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 8, historia: 7 } },
  { nombre: "David", ciudad: "Bilbao", beca: false, edad: 24, calificaciones: { matematicas: 7, fisica: 6, historia: 8 } },
  { nombre: "Laura", ciudad: "Barcelona", beca: true, edad: 19, calificaciones: { matematicas: 6, fisica: 8, historia: 7 } },
  { nombre: "Miguel", ciudad: "Sevilla", beca: false, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 8 } },
  { nombre: "Sara", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 6, fisica: 5, historia: 9 } },
  { nombre: "Daniela", ciudad: "Valencia", beca: false, edad: 22, calificaciones: { matematicas: 8, fisica: 9, historia: 6 } },
  { nombre: "Alberto", ciudad: "Bilbao", beca: true, edad: 23, calificaciones: { matematicas: 5, fisica: 8, historia: 6 } },
  { nombre: "Gabriel", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 8, fisica: 5, historia: 7 } },
  { nombre: "Carmen", ciudad: "Barcelona", beca: true, edad: 24, calificaciones: { matematicas: 9, fisica: 9, historia: 9 } },
  { nombre: "Roberto", ciudad: "Madrid", beca: false, edad: 20, calificaciones: { matematicas: 4, fisica: 5, historia: 5 } },
  { nombre: "Carolina", ciudad: "Valencia", beca: true, edad: 22, calificaciones: { matematicas: 5, fisica: 7, historia: 6 } },
  { nombre: "Alejandro", ciudad: "Bilbao", beca: false, edad: 23, calificaciones: { matematicas: 9, fisica: 8, historia: 8 } },
  { nombre: "Lucia", ciudad: "Barcelona", beca: true, edad: 21, calificaciones: { matematicas: 7, fisica: 7, historia: 7 } },
  { nombre: "Ricardo", ciudad: "Sevilla", beca: false, edad: 19, calificaciones: { matematicas: 6, fisica: 5, historia: 6 } },
  { nombre: "Marina", ciudad: "Madrid", beca: true, edad: 20, calificaciones: { matematicas: 5, fisica: 9, historia: 8 } }
];
// Función para crear una tabla con los resultados
function mostrarResultadosEnTabla(resultados) {
  const tabla = document.createElement("table");
  const encabezado = tabla.createTHead();
  const filaEncabezado = encabezado.insertRow();
  for (const campo in resultados[0]) {
    const th = document.createElement("th");
    th.textContent = campo;
    filaEncabezado.appendChild(th);
  }
  const cuerpoTabla = tabla.createTBody();
  resultados.forEach((resultado) => {
    const fila = cuerpoTabla.insertRow();
    for (const campo in resultado) {
      const celda = fila.insertCell();
      celda.textContent = resultado[campo];
    }
  });
  return tabla;
}

// Función para mostrar los resultados en la página
function mostrarResultadosEnPagina(resultados) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = ""; // Limpiar resultados anteriores
  if (resultados.length === 0) {
    resultadoDiv.textContent = "No se encontraron resultados.";
  } else {
    const tabla = mostrarResultadosEnTabla(resultados);
    resultadoDiv.appendChild(tabla);
  }
}

// Parte 1: Estudiantes Destacados por Asignatura
function estudiantesDestacadosPorAsignatura(asignatura) {
  const resultados = estudiantesDestacadosPorAsignatura(asignatura); // Línea corregida
  mostrarResultadosEnPagina(resultados);
}

// Parte 2: Asignatura con Menor Rendimiento
function asignaturaMenorRendimiento() {
  const asignatura = asignaturaMenorRendimiento(); // Línea corregida
  mostrarResultadosEnPagina([{ "Asignatura con Menor Rendimiento": asignatura }]);
}

// Parte 3: Mejora de Notas para Estudiantes con Beca
function mejoraNotasBeca() {
  const resultados = mejoraNotasBeca(); // Línea corregida
  mostrarResultadosEnPagina(resultados);
}

// Parte 4: Filtrado por Ciudad y Asignatura
function filtrarPorCiudadYAsignatura(ciudad, asignatura) {
  const resultados = filtrarPorCiudadYAsignatura(ciudad, asignatura); // Línea corregida
  mostrarResultadosEnPagina(resultados);
}

// Parte 5: Estudiantes Sin Beca por Ciudad
function estudiantesSinBecaPorCiudad(ciudad) {
  const cantidadEstudiantes = estudiantesSinBecaPorCiudad(ciudad); // Línea corregida
  mostrarResultadosEnPagina([{ "Estudiantes sin Beca en Ciudad": cantidadEstudiantes }]);
}

// Parte 6: Promedio de Edad de Estudiantes con Beca
function promedioEdadEstudiantesConBeca() {
  const promedio = promedioEdadEstudiantesConBeca(); // Línea corregida
  mostrarResultadosEnPagina([{ "Promedio de Edad de Estudiantes con Beca": promedio }]);
}

// Parte 7: Mejores Estudiantes en Total
function mejoresEstudiantes() {
  const resultados = mejoresEstudiantes();
  mostrarResultadosEnPagina(resultados);
}

// Parte 8: Estudiantes con Todas las Materias Aprobadas
function estudiantesAprobados() {
  const resultados = estudiantesAprobados();
  mostrarResultadosEnPagina(resultados);
}