const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function conversor() {
  const Tabla = {
    "0": "Shimmy",
    "1": "Shake",
    "2": "Pirouette",
    "3": "Slide",
    "4": "Box Step",
    "5": "Robot",
    "6": "Moonwalk",
    "7": "Breakdance",
    "8": "Electric Slide",
    "9": "Cha Cha",
    a: "Alfa",
    b: "Bravo",
    c: "Charlie",
    d: "Delta",
    e: "Echo",
    f: "Foxtrot",
    g: "Golf",
    h: "Hotel",
    i: "India",
    j: "Juliett",
    k: "Kilo",
    l: "Lima",
    m: "Mike",
    n: "November",
    o: "Oscar",
    p: "Papa",
    q: "Quebec",
    r: "Romeo",
    s: "Sierra",
    t: "Tango",
    u: "Uniform",
    v: "Victor",
    w: "Whiskey",
    x: "X-ray",
    y: "Yankee",
    z: "Zulu",
  };

  rl.question("Ingrese el texto para convertir: ", (entrada) => {
    // Verificar si la entrada contiene solo números o letras del alfabeto internacional
    const esEntradaValida = /^[0-9a-zA-Z]+$/.test(entrada);

    if (!esEntradaValida) {
      console.log("Entrada inválida.");
      rl.close();
      return;
    }

    const textoNormalizado = entrada.toLowerCase();
    const secuenciaDeBaile = [];

    for (const caracter of textoNormalizado) {
      const movimiento = Tabla[caracter];
      if (movimiento) {
        secuenciaDeBaile.push(movimiento);
      }
    }

    if (secuenciaDeBaile.length === 0) {
      console.log("Entrada inválida.");
    } else {
      console.log(secuenciaDeBaile);
    }

    rl.close();
  });
}

// Llamar a la función para solicitar entrada al usuario
conversor();
