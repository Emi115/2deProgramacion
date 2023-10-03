function areAnagrams(word1, word2) {
    // Elimina espacios y convierte a minúsculas para que no importe la capitalización ni los espacios
    const cleanWord1 = word1.replace(/\s/g, '').toLowerCase();
    const cleanWord2 = word2.replace(/\s/g, '').toLowerCase();
    
    // Compara si las palabras reordenadas son iguales
    return cleanWord1.split('').sort().join('') === cleanWord2.split('').sort().join('');
  }
  
  // Ejemplos de uso
  console.log(areAnagrams("listen", "silent")); // Devuelve true
  console.log(areAnagrams("hello", "world"));   // Devuelve false
  