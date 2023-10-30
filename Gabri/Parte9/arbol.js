function arbolNavidad(altura) {
  for (let i = 1; i <= altura; i++) {
    const espacios = " ".repeat(altura - i);
    const asteriscos = "*".repeat(2 * i - 1);
    console.log(espacios + asteriscos);
  }

  // Palito tronco 
  for (let i = 0; i < altura / 3; i++) {
    const espacios = " ".repeat(altura - 4);
    console.log(espacios + "|");
  }
}

// Llama a la función para dibujar un árbol de Navidad con una altura de 5 niveles
arbolNavidad(5);
