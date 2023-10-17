// Función para eliminar elementos menores o iguales a 18
function filtrarNumerosMayoresQue18(arr) {
    return arr.filter(numero => numero >= 18);
  }
  
  // Función para sumar todos los números en un array con reduce
  function sumarArray(arr) {
    return arr.reduce((acumulador, actual) => acumulador + actual, 0);
  }
  
  const numeros = [10, 20, 5, 30, 15, 25];
  
  const numerosFiltrados = filtrarNumerosMayoresQue18(numeros);
  console.log(numerosFiltrados); // Devuelve [20, 30, 25]
  
  const suma = sumarArray(numerosFiltrados);
  console.log(suma); // Devuelve 75 (20 + 30 + 25)
  