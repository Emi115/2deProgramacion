function isOddishOrEvenish(number) {
    const sumOfDigits = String(number).split('').reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    
    return sumOfDigits % 2 === 0 ? "Evenish" : "Oddish";
  }
  
  // Ejemplos de uso
  console.log(isOddishOrEvenish(12345)); // Devuelve "Oddish" porque 1+2+3+4+5 = 15 (impar)
  console.log(isOddishOrEvenish(2468));  // Devuelve "Evenish" porque 2+4+6+8 = 20 (par)
  