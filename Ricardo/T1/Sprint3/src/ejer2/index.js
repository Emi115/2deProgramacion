function transponerMatriz(matriz) {
  const filas = matriz.length;
  const columnas = matriz[0].length;
  const resultado = [];

  for (let i = 0; i < columnas; i++) {
    resultado[i] = [];
    for (let j = 0; j < filas; j++) {
      resultado[i][j] = matriz[j][i]; // Transpone filas y columnas
    }
  }

  return resultado;
}

// Ejemplo de uso
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrizTranspuesta = transponerMatriz(matriz);
console.log(matrizTranspuesta);
// Salida:
// [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]
