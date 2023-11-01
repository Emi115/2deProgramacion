function fusionarObjetos(obj1, obj2) {
  const resultado = { ...obj1 }; // Copiamos el primer objeto

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key) && !resultado.hasOwnProperty(key)) {
      resultado[key] = obj2[key]; // Fusiona objetos sin duplicados
    }
  }

  return resultado;
}

// Ejemplo de uso
var PEPE = { a: 1, b: 2, c: 3, d: 4 };
var MANUEL = { b: 2, z: 3 };
var PEPEMANUEL = fusionarObjetos(PEPE, MANUEL);
console.log(PEPEMANUEL);
// Salida: {a: 1, b: 2, c: 3, d: 4, z: 3}
