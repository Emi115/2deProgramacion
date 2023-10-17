let myString = "javascript";
let x = 0;

// Contar hacia adelante y mostrar partes de la cadena
for (let i = 0; i <= myString.length; i++) {
  x = x + 1;
  console.log(myString.slice(0, x));
}

// Restablecer x para contar hacia atrás
x = myString.length;

// Contar hacia atrás y mostrar partes de la cadena
for (let i = myString.length; i > 0; i--) {
  x = x - 1;
  console.log(myString.slice(0, x));
}
