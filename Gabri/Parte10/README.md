### #️⃣1️⃣1️⃣ NODEJS: Test unitarios.

---

Ejercicios clases + ejercicios casa.


---


#### EJERCICIOS CLASE 
    1. Realizar ejercicio fizzbuzz con sus test correspondientes con AVA.
        - Programa funcionando correctamente
        – Test realizados con ava, con cobertura de código 100%
        – Docker-compose para arrancar SonarQube
        – Fichero de configuración de SonarQube
        – Script del package.json para automatizar las labores de: arrancar SonarMQ, lanzar los
            test, lanzar los test en modo watch y generar los ficheros de test.
            
        -> src:fizzbuzz.js, test:fizzbuzz.test.js
            
        
    2. Realizar ejercicios de comparación de fechas con sus test usando AVA. Se realiza una función
    llamada dateCompare que:
        • Al recibir dos fechas, devolverá cual es anterior y cual es posterior en un objeto
        { startDate: 'ISODateString', endDate: 'ISODateString'}.
        • Si solo recibe una fecha, se comparará con el momento actual.
        
        -> src:dateCompare.js, test:dateCompare.test.js
  
### EJERCICIOS CASA
    3. Investigar y realizar los test de los ejercicios usando Jest.
        -> src:fizzbuzz.js, test:fizzbuzz-jest.test.js
    
    4. Modificar fizzbuzz para recibir el numero y las condiciones en un objeto. 
       Modificación sobre el script y test realizados de fizzbuzz. En Jest o AVA.
        -> src:fizzbuzz-ej4.js, test:fizzbuzz-ej4.test.js

