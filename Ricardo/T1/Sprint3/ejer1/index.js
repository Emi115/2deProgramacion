function filtrarPropiedades(obj, propiedades) {
  const resultado = {};
  for (const propiedad of propiedades) {
    if (obj.hasOwnProperty(propiedad)) {
      // Comprueba si la propiedad existe en el objeto
      resultado[propiedad] = obj[propiedad]; // Copia la propiedad al nuevo objeto
    }
  }
  return resultado;
}

// Ejemplo de uso
var entrada = { a: 1, b: 2, c: 3, d: 4 };
var props = ["a", "c"];
var salida = filtrarPropiedades(entrada, props);
console.log(salida); // Salida: {a: 1, c: 3}
