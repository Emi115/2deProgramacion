function restaDePropiedades(obj) {
    return obj.bien - obj.mal;
  }
  
  const resultado = restaDePropiedades({ bien: 10, mal: 5 });
  console.log(resultado); //5
  