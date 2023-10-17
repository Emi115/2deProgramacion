function calcularVolumen(obj) {
    return obj.ancho * obj.largo * obj.alto;
  }
  
  const volumen = calcularVolumen({ ancho: 2, largo: 5, alto: 1 });
  console.log(volumen); //10
  