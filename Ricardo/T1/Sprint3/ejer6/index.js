const estudiantes = [
  {
    nombre: "Juan",
    ciudad: "Madrid",
    beca: false,
    edad: 21,
    calificaciones: { matematicas: 5, fisica: 7, historia: 6 },
  },
  {
    nombre: "Ana",
    ciudad: "Barcelona",
    beca: true,
    edad: 20,
    calificaciones: { matematicas: 9, fisica: 6, historia: 8 },
  },
  {
    nombre: "Pedro",
    ciudad: "Madrid",
    beca: false,
    edad: 23,
    calificaciones: { matematicas: 4, fisica: 5, historia: 7 },
  },
  {
    nombre: "Maria",
    ciudad: "Sevilla",
    beca: true,
    edad: 19,
    calificaciones: { matematicas: 8, fisica: 7, historia: 9 },
  },
  {
    nombre: "Jose",
    ciudad: "Madrid",
    beca: false,
    edad: 22,
    calificaciones: { matematicas: 6, fisica: 7, historia: 5 },
  },
  {
    nombre: "Isabel",
    ciudad: "Valencia",
    beca: true,
    edad: 20,
    calificaciones: { matematicas: 5, fisica: 8, historia: 7 },
  },
  {
    nombre: "David",
    ciudad: "Bilbao",
    beca: false,
    edad: 24,
    calificaciones: { matematicas: 7, fisica: 6, historia: 8 },
  },
  {
    nombre: "Laura",
    ciudad: "Barcelona",
    beca: true,
    edad: 19,
    calificaciones: { matematicas: 6, fisica: 8, historia: 7 },
  },
  {
    nombre: "Miguel",
    ciudad: "Sevilla",
    beca: false,
    edad: 21,
    calificaciones: { matematicas: 7, fisica: 7, historia: 8 },
  },
  {
    nombre: "Sara",
    ciudad: "Madrid",
    beca: true,
    edad: 20,
    calificaciones: { matematicas: 6, fisica: 5, historia: 9 },
  },
  {
    nombre: "Daniela",
    ciudad: "Valencia",
    beca: false,
    edad: 22,
    calificaciones: { matematicas: 8, fisica: 9, historia: 6 },
  },
  {
    nombre: "Alberto",
    ciudad: "Bilbao",
    beca: true,
    edad: 23,
    calificaciones: { matematicas: 5, fisica: 8, historia: 6 },
  },
  {
    nombre: "Gabriel",
    ciudad: "Sevilla",
    beca: false,
    edad: 19,
    calificaciones: { matematicas: 8, fisica: 5, historia: 7 },
  },
  {
    nombre: "Carmen",
    ciudad: "Barcelona",
    beca: true,
    edad: 24,
    calificaciones: { matematicas: 9, fisica: 9, historia: 9 },
  },
  {
    nombre: "Roberto",
    ciudad: "Madrid",
    beca: false,
    edad: 20,
    calificaciones: { matematicas: 4, fisica: 5, historia: 5 },
  },
  {
    nombre: "Carolina",
    ciudad: "Valencia",
    beca: true,
    edad: 22,
    calificaciones: { matematicas: 5, fisica: 7, historia: 6 },
  },
  {
    nombre: "Alejandro",
    ciudad: "Bilbao",
    beca: false,
    edad: 23,
    calificaciones: { matematicas: 9, fisica: 8, historia: 8 },
  },
  {
    nombre: "Lucia",
    ciudad: "Barcelona",
    beca: true,
    edad: 21,
    calificaciones: { matematicas: 7, fisica: 7, historia: 7 },
  },
  {
    nombre: "Ricardo",
    ciudad: "Sevilla",
    beca: false,
    edad: 19,
    calificaciones: { matematicas: 6, fisica: 5, historia: 6 },
  },
  {
    nombre: "Marina",
    ciudad: "Madrid",
    beca: true,
    edad: 20,
    calificaciones: { matematicas: 5, fisica: 9, historia: 8 },
  },
];

function estudiantesDestacadosPorAsignatura(estudiantes, asignatura) {
  const destacados = estudiantes
    .map((estudiante) => ({
      nombre: estudiante.nombre,
      nota: estudiante.calificaciones[asignatura],
    }))
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

  return destacados;
}

function asignaturaMenorRendimiento(estudiantes) {
  const asignaturas = Object.keys(estudiantes[0].calificaciones);
  let asignaturaMenor = asignaturas[0];
  let promedioMenor = Infinity;

  for (const asignatura of asignaturas) {
    const promedio = estudiantes.reduce(
      (total, estudiante) => total + estudiante.calificaciones[asignatura],
      0
    );
    promedio /= estudiantes.length;

    if (promedio < promedioMenor) {
      promedioMenor = promedio;
      asignaturaMenor = asignatura;
    }
  }

  return asignaturaMenor;
}

function mejoraNotasBeca(estudiantes) {
  estudiantes.forEach((estudiante) => {
    if (estudiante.beca) {
      for (const asignatura in estudiante.calificaciones) {
        estudiante.calificaciones[asignatura] = Math.min(
          10,
          estudiante.calificaciones[asignatura] * 1.1
        );
      }
    }
  });
}

function filtrarPorCiudadYAsignatura(estudiantes, ciudad, asignatura) {
  const filtrados = estudiantes
    .filter((estudiante) => estudiante.ciudad === ciudad)
    .sort(
      (a, b) => b.calificaciones[asignatura] - a.calificaciones[asignatura]
    );

  return filtrados;
}

function estudiantesSinBecaPorCiudad(estudiantes, ciudad) {
  const sinBeca = estudiantes.filter(
    (estudiante) => estudiante.ciudad === ciudad && !estudiante.beca
  );

  return sinBeca.length;
}
function promedioEdadEstudiantesConBeca(estudiantes) {
  const conBeca = estudiantes.filter((estudiante) => estudiante.beca);
  const sumaEdades = conBeca.reduce(
    (total, estudiante) => total + estudiante.edad,
    0
  );
  const promedio = sumaEdades / conBeca.length;

  return promedio;
}
function mejoresEstudiantes(estudiantes) {
  const mejores = estudiantes
    .map((estudiante) => ({
      nombre: estudiante.nombre,
      promedio: Object.values(estudiante.calificaciones).reduce(
        (total, nota) => total + nota,
        0
      ),
    }))
    .sort((a, b) => b.promedio - a.promedio)
    .slice(0, 2);

  return mejores;
}

function estudiantesAprobados(estudiantes) {
  const aprobados = estudiantes.filter((estudiante) =>
    Object.values(estudiante.calificaciones).every((nota) => nota >= 5)
  );

  return aprobados.map((estudiante) => estudiante.nombre);
}
