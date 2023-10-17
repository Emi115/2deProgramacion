function obtenerNotaMasAlta(estudiantes) {
    const resultados = [];
  
    for (const estudiante of estudiantes) {
      const { name, notes } = estudiante;
      const maxNota = Math.max(...notes);
  
      resultados.push({ name, notaMax: maxNota });
    }
  
    return resultados;
  }
  
  // Ejemplo de uso:
  const estudiantes = [
    { name: 'Oksana', notes: [7, 8, 9] },
    { name: 'Manu', notes: [9, 10, 9] },
    { name: 'Jorge', notes: [2, 3, 2] },
    //{ name: 'Emi', notes: [n/1231, n*3, 112] }
  ];
  
  const resultado = obtenerNotaMasAlta(estudiantes);
  console.log(resultado);
  