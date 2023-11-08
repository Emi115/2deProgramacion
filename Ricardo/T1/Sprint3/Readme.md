--
## Boletín de Ejercicios - Sprint 3

# 🔎 Análisis del problema
## Fase 1: Filtrado de propiedades de un objeto
Requisitos Funcionales:

Debe haber una función que tome un objeto como entrada.
La función debe aceptar una lista de nombres de propiedades como argumento.
La función debe devolver un nuevo objeto que contenga solo las propiedades especificadas.
El nuevo objeto debe ser una copia de las propiedades del objeto original.
Requisitos No Funcionales:

La función debe ser eficiente en términos de rendimiento.
Debe manejar casos en los que algunas de las propiedades especificadas no existan en el objeto original.
## Fase 2: Transposición de matrices
Requisitos Funcionales:

Debe haber una función que tome una matriz como entrada.
La función debe realizar la transposición de la matriz, intercambiando filas por columnas.
La matriz original no debe modificarse, y la función debe devolver una nueva matriz transpuesta.
Requisitos No Funcionales:

La función debe ser eficiente en términos de rendimiento, especialmente para matrices grandes.
## Fase 3: Fusión de objetos sin duplicados
Requisitos Funcionales:

Debe haber una función que acepte dos o más objetos como entrada.
La función debe fusionar los objetos en uno solo.
Las propiedades duplicadas en los objetos de entrada deben manejarse sin generar conflictos, por ejemplo, tomando el valor del último objeto en caso de duplicados.
La función debe devolver el objeto fusionado.
Requisitos No Funcionales:

La función debe ser eficiente y escalable para manejar múltiples objetos de entrada.
## Fase 4: Cadena más larga en un array
Requisitos Funcionales:

Debe haber una función que tome un array de cadenas como entrada.
La función debe encontrar la cadena más larga en el array.
La función debe devolver la cadena más larga encontrada.
Requisitos No Funcionales:

La función debe ser eficiente y manejar arrays de diferentes tamaños.
## Ejercicio 5: Ordenamiento interactivo de tabla de personas
Requisitos Funcionales:

Debe haber una función que tome una tabla de personas como entrada.
La función debe permitir la ordenación de la tabla por cualquiera de las columnas, incluyendo "Nombre", "Edad", "DNI", "Tiene/No tiene hijos" y "Fecha de nacimiento".
La columna "Fecha de nacimiento" debe ser formateada como "DD/MM/AAAA".
La función debe devolver la tabla ordenada.
Requisitos No Funcionales:

La función debe ser eficiente y manejar tablas de diferentes tamaños.
Debe cumplir con el formato de fecha especificado.
## Ejercicio 6: Análisis y Transformación Avanzada de Datos
Requisitos Funcionales:

Debe haber funciones para analizar, filtrar y transformar un conjunto de datos en forma de array.
Las funciones deben permitir realizar operaciones como la búsqueda de estudiantes con calificaciones específicas, filtrar estudiantes por edad, y transformar datos para agregar información adicional.
Las funciones deben devolver el resultado de las operaciones realizadas en los datos.
Requisitos No Funcionales:

Las funciones deben ser eficientes y escalables para manejar conjuntos de datos de diferentes tamaños.
Deben ser flexibles y capaces de realizar una variedad de operaciones.
Este análisis de requisitos proporciona una visión general de los objetivos y funciones clave de cada fase y ejercicio. Los requisitos funcionales y no funcionales son fundamentales para guiar el desarrollo de estas funciones y asegurar que cumplan con las expectativas y necesidades del usuario.

##Diseño 📈
## Fase 1: Filtrado de propiedades de un objeto

En esta fase, aprenderás a crear una función que filtre las propiedades de un objeto y devuelva un nuevo objeto solo con las propiedades especificadas.


## Fase 2: Transposición de matrices

En la segunda fase, te adentrarás en el mundo de las matrices y aprenderás a transponer una matriz, intercambiando filas y columnas.


## Fase 3: Fusión de objetos sin duplicados

La tercera fase se centra en fusionar objetos y garantizar que no haya propiedades duplicadas.



## Fase 4: Cadena más larga en un array

En la cuarta fase, resolverás un problema común: encontrar la cadena más larga en un array.


## Ejercicio 5: Ordenamiento interactivo de tabla de personas
Descripción:
Dada una tabla de personas con las columnas "Nombre", "Edad", "DNI", "Tiene/No tiene hijos" y "Fecha de nacimiento", se requiere escribir una función que permita ordenar la tabla por cualquiera de esas columnas. La columna "Fecha de nacimiento" debe tener el formato DD/MM/AAAA.


## Ejercicio 6: Análisis y Transformación Avanzada de Datos

Descripción:
Dado un conjunto de datos en forma de array con información sobre estudiantes, sus calificaciones en diferentes asignaturas y detalles adicionales, implementa funciones para analizar, filtrar y transformar estos datos.

---

## Implementación ⚙️

## Ejercicio 1: Filtrado de propiedades de un objeto

Código de implementación del ejercicio 1.

- **Ejercicio 1:** [Filtrado de propiedades de un objeto](/src/ejer1/)
  [![image.png](https://i.postimg.cc/wjn7y0Zh/image.png)](https://postimg.cc/zySJ4SJB)

## Ejercicio 2: Transposición de matrices

Código de implementación del ejercicio 2.

- **Ejercicio 2:** [Transposición de matrices](/src/ejer2)
  [![image.png](https://i.postimg.cc/ZnzQWtF1/image.png)](https://postimg.cc/DJ56NNNg)

## Ejercicio 3: Fusión de objetos sin duplicados

Código de implementación del ejercicio 3.

- **Ejercicio 3:** [Fusión de objetos sin duplicados](/src/ejer3)
  [![image.png](https://i.postimg.cc/G2fyKdS5/image.png)](https://postimg.cc/wyhMT8zX)

## Ejercicio 4: Cadena más larga en un array

Código de implementación del ejercicio 4.

- **Ejercicio 4:** [Cadena más larga en un array](/src/ejer4)
  [![image.png](https://i.postimg.cc/05ptQ4Mq/image.png)](https://postimg.cc/SjxL1DfZ)

## Ejercicio 5: Ordenamiento interactivo de tabla de personas

Código de implementación del ejercicio 5.

- **Ejercicio 5:** [Ordenamiento interactivo de tabla de personas](/src/ejer5/index.html)
[![2023-11-08-20-35-43-1.gif](https://i.postimg.cc/kXGcz45S/2023-11-08-20-35-43-1.gif)](https://postimg.cc/3dMmD3mr)
## Ejercicio 6: Análisis y Transformación Avanzada de Datos


Código de implementación del ejercicio 6.

- **Ejercicio 6:** [Análisis y Transformación Avanzada de Datos
](/src/ejer5/index.html)
[![2023-11-08-20-35-43-3.gif](https://i.postimg.cc/3xKG4ryR/2023-11-08-20-35-43-3.gif)](https://postimg.cc/2VKygD7R)
## Planes de prueba

- **Ejercicio 1:** [Filtrado de propiedades de un objeto](Ricardo/T1/Sprint3/src/ejer1/index.html)

- **Ejercicio 2:** [Transposición de matrices](/src/ejer2/Plan2.xlsx)

- **Ejercicio 3:** [Fusión de objetos sin duplicados](/src/ejer3/Plan3.xlsx)

- **Ejercicio 4:** [Cadena más larga en un array](/src/ejer4/Plan4.xlsx)

- **Ejercicio 5:** [Ordenamiento interactivo de tabla de personas](/src/ejer5/Plan5.xlsx)
- **Ejercicio 6:** [ Análisis y Transformación Avanzada de Datos](/src/ejer6/Plan6.xlsx)
