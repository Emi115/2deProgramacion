function isSimilar(obj1, obj2) {
    // Comprobar si los tipos de obj1 y obj2 son iguales
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
  
    // Para arrays
    if (Array.isArray(obj1)) {
      // Comprobar si la longitud de ambos arrays es la misma
      if (obj1.length !== obj2.length) {
        return false;
      }
  
      // Comprobar cada elemento de forma recursiva
      for (let i = 0; i < obj1.length; i++) {
        if (!isSimilar(obj1[i], obj2[i])) {
          return false;
        }
      }
  
      return true;
    }
  
    // Para objetos (incluyendo Maps)
    if (typeof obj1 === "object" && obj1 !== null && obj2 !== null) {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
  
      // Comprobar si las claves en ambos objetos son iguales
      if (keys1.length !== keys2.length) {
        return false;
      }
  
      for (const key of keys1) {
        if (!isSimilar(obj1[key], obj2[key])) {
          return false;
        }
      }
  
      return true;
    }
  
    // Si no es un objeto ni un array, simplemente comparamos los valores directamente
    return obj1 === obj2;
  }
  