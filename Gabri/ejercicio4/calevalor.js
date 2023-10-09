function invertirObjeto(objeto) {
    const resultado = {};
    for (const clave in objeto) {
      if (objeto.hasOwnProperty(clave)) {
        resultado[objeto[clave]] = clave;
      }
    }
    return resultado;
  }
  
  const objetoOriginal = { "z": "q", "w": "f" };
  const objetoInvertido = invertirObjeto(objetoOriginal);
  console.log(objetoInvertido);
  