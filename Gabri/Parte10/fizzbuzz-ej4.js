/* EJERCICIO 4: Modificación sobre el script y test realizados de fizzbuzz. En Jest o AVA.
Modificar fizzbuzz para recibir el numero y las condiciones en un objeto:
const n = 100;
const condition = {
2: 'poo',
3: 'fizz',
5: 'buzz',
15: 'foo'
};*/

function fizzBuzz(n, condition){
    let text = '';
    Object.entries(condition).forEach(([num, t]) => {
        if(n % num === 0) text += t;
    });
    
    return text || n;
}

export default fizzBuzz;