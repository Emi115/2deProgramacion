const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    trabajo: 'Ingeniero'
  };
  
  const { nombre, ...rest } = persona;
  
  console.log(nombre); // Devuelve a Juan
  console.log(rest);   // Devuelve la edad: 30, ciudad: 'Madrid', trabajo: 'Ingeniero' 
  