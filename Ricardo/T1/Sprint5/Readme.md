## Boletín de Ejercicios - Sprint 5

### Ejercicio 1: "Hola Mundo" en TypeScript

**Objetivo:** Crear un programa simple que imprima "Hola Mundo" en la consola.

**Tareas:**
1. Instalar TypeScript y configurar el entorno de desarrollo.
2. Crear un archivo holaMundo.ts.
3. Escribir una función que imprima "Hola Mundo".
4. Transpilar el archivo TypeScript a JavaScript y ejecutarlo.

**Prueba:**
- Hacer que se imprima “Hola Mundo!”.
- Verificar que transpila e imprime “Hola Mundo!”.
- Quitar la exclamación “Hola Mundo” y verificar que transpila e imprime “Hola Mundo”.

### Ejercicio 2: Función con Tipos Básicos con Typescript

**Objetivo:** Escribir una función que acepte un nombre (string) y una edad (number) y devuelva un saludo personalizado.

**Tareas:**
1. Crear una función saludar que tome dos parámetros: nombre y edad.
2. La función debe retornar un saludo que incluya ambos datos.
3. Probar la función con diferentes nombres y edades.

**Prueba:** 
- Hacer que se pida introducir un nombre y una edad, tras esto, tendría que salir un texto que indique “Hola! mi nombre es {{nombre}} y tengo {{edad}} años”.

### Ejercicio 3: Uso de Interfaces con Typescript

**Objetivo:** Crear una interfaz para un objeto "Usuario" y utilizarla para crear un usuario.

**Tareas:**
1. Definir una interfaz Usuario con propiedades como nombre, edad y correo electrónico.
2. Crear una función que acepte un objeto Usuario y devuelva una descripción del usuario.
3. Crear varios objetos de prueba y pasarlos a la función.

**Prueba:** 
- Instanciar un array de 5 Usuarios e imprimir por consola la frase “Hola! soy el usuario {{nombre}}, tengo {{edad}} años y mi correo electrónico es {{correo electrónico}}” para cada usuario.

### Ejercicio 4: Manipulación de Arrays con Typescript

**Objetivo:** Crear una aplicación simple que maneje una lista de tareas (to-do list) usando arrays en TypeScript.

**Tareas:**
1. Crear un array para almacenar tareas, cada una siendo un objeto con propiedades como id, titulo, y completada.
2. Implementar funciones para añadir, eliminar y marcar tareas como completadas.
3. Crear una función que muestre las tareas en la consola.

**Prueba:** 
- Añadir tarea a la lista de tareas.
- Borrar tarea de la lista de tareas.
- Añadir una tarea nueva a la lista.
- Marcar esa tarea como “Importante”.
- Ver que aparece en la lista de “Importante” y en la de tareas normal.

### Ejercicio 5: Crear una Pokedex con PokeAPI con Typescript

**Objetivo:** Construir una aplicación en TypeScript que utilice la PokeAPI para mostrar información de Pokémon.

**Tareas:**
1. Estudiar la documentación de la PokeAPI para entender cómo obtener datos de Pokémon.
2. Crear una interfaz de usuario interactiva utilizando HTML/CSS.
3. Implementar un campo de búsqueda donde los usuarios puedan escribir el nombre o ID de un Pokémon y obtener resultados en tiempo real.
4. Diseñar una visualización atractiva de la información del Pokémon, incluyendo imágenes, tipos, estadísticas básicas, movimientos, y evoluciones.
5. Manejar posibles errores, como búsquedas de Pokémon que no existen.

**Plan de Pruebas:** [Plan de Pruebas](/Planpruebas.xlsx)