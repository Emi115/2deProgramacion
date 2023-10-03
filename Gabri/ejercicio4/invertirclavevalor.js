// Declaración de la función que recibe un objeto como argumento
function invertirClaveValor(objeto) {
    // Se crea un objeto vacío para almacenar las claves y valores invertidos
    const objetoInvertido = {};
  
    // Se inicia un bucle para iterar a través de las claves del objeto original
    for (const clave in objeto) {
      // Se verifica si la clave actual pertenece al objeto original
      if (objeto.hasOwnProperty(clave)) {
        // Se obtiene el valor asociado a la clave actual
        const valor = objeto[clave];
        
        // Se asigna el valor como una nueva clave en el objeto invertido,
        // y la clave original se convierte en el valor
        objetoInvertido[valor] = clave;
      }
    }
  
    // Se devuelve el objeto invertido
    return objetoInvertido;
  }
  
  // Ejemplo de uso de la función con un objeto original
  const objetoOriginal = { "z": "q", "w": "f" };
  const objetoInvertido = invertirClaveValor(objetoOriginal);
  
  // Se imprime el objeto invertido en la consola
  console.log(objetoInvertido);
  