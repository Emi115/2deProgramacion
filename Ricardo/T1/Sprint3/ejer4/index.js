function cadenaMasLarga(arr) {
  // Inicializamos dos variables para mantener un seguimiento de la cadena más larga y su longitud.
  let cadenaMasLarga = "";
  let longitud = 0;

  // Recorremos todas las cadenas en el array proporcionado.
  for (const cadena of arr) {
    // Comparamos la longitud de la cadena actual con la longitud registrada.
    if (cadena.length > longitud) {
      // Si la cadena actual es más larga, la asignamos a 'cadenaMasLarga'.
      cadenaMasLarga = cadena;
      // Actualizamos la longitud registrada con la longitud de la cadena actual.
      longitud = cadena.length; // Encuentra la cadena más larga y su longitud
    }
  }

  // Retornamos un objeto con la cadena más larga y su longitud.
  return { cadena: cadenaMasLarga, longitud: longitud };
}

// Ejemplos
var arrayDeCadenas = ["manzana", "banana", "fresa", "sandía", "uva"];
var resultado = cadenaMasLarga(arrayDeCadenas);
console.log(resultado);
// Salida: { cadena: "sandía", longitud: 7 }

var cadenas4 = ["manzana", "banana", "fresa y kiwi", "uva verde"];
var resultado4 = cadenaMasLarga(cadenas4);
console.log(resultado4);
// Salida: { cadena: "fresa y kiwi", longitud: 12 }

var cadenas3 = ["", "", ""];
var resultado3 = cadenaMasLarga(cadenas3);
console.log(resultado3);
// Salida: { cadena: "", longitud: 0 }
