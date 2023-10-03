function danceConvert(pin) {
    const danceMoves = {
      "0": "Shimmy",
      "1": "Shake",
      "2": "Pirouette",
      "3": "Slide",
      "4": "Box Step",
      "5": "Robot",
      "6": "Moonwalk",
      "7": "Breakdance",
      "8": "Electric Slide",
      "9": "Cha Cha"
    };
  
    const pinDigits = pin.split("");
  
    // Verificar si el PIN es válido (debe contener solo dígitos y tener longitud 4)
    if (pinDigits.length !== 4 || pinDigits.some(digit => isNaN(digit))) {
      return "Entrada inválida.";
    }
  
    // Convertir cada dígito del PIN en un movimiento de baile
    const danceSequence = pinDigits.map(digit => danceMoves[digit]);
  
    return danceSequence;
    console.log(danceConvert("3856")); // Debería devolver ["Slide", "Arabesque", "Pop", "Arabesque"]

  }
  

  