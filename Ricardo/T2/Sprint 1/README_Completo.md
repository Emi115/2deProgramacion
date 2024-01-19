# Boletín de Ejercicios - T2 Sprint 1

## Análisis 

Los ejercicios propuestos en este boletín se enfocan en la aplicación de conceptos fundamentales de React, como componentes funcionales, props, estado y manejo de eventos. Cada ejercicio plantea un escenario distinto que permite explorar y reforzar estos conceptos a través de la implementación de componentes sencillos pero representativos de situaciones reales en el desarrollo de aplicaciones web.

---

## Ejercicio 1: Hola Mundo en React y Componente con Props

### Detalles del Ejercicio

1. Crea un componente funcional llamado `HolaMundo` que simplemente renderice un elemento `<h1>` con el texto "¡Hola Mundo!".
2. Renderiza este componente dentro del componente `App`.
3. Crea un componente funcional llamado `Saludo` que acepte una prop `nombre`.
4. Este componente debe renderizar un párrafo que diga "Hola [nombre]".
5. Renderiza el componente `Saludo` varias veces en `App` con diferentes nombres.

### Implementación ⚙️

[Codigo del ejercicio 1](/reactricardo/src/Components/HolaMundo.js)
<img src="/reactricardo//videos/Ejercicio1.gif"/>

### Pruebas

Hacer que ponga “Hola Mundo!” ver que se renderiza y que el componente funcione como se pide en las Tareas.

---

## Ejercicio 2: Lista de Elementos

### Detalles del Ejercicio

1. Crea un componente `ListaDeFrutas` que renderice una lista (`<ul>`) de elementos (`<li>`).
2. El componente debe aceptar un array de frutas como prop y renderizar cada fruta en un elemento de lista, incluyendo su imagen.

### Implementación ⚙️

[Codigo del ejercicio 2](/reactricardo/src/Components/listaFruta.js)

<img src="/reactricardo/videos/Ejercicio2.gif"/>

### Pruebas

Hacer que aparezca la `ListaDeFrutas` y que se acepte un array de frutas y que se visualicen sus imágenes correspondientes (5 tipos de frutas).

---

## Ejercicio 3: Contador de Clicks

### Detalles del Ejercicio

1. Crea un componente `Contador` que muestre un número (inicialmente 0) y un botón.
2. Cada vez que el botón sea clickeado, el número debe incrementarse en uno.
3. Implementa esto utilizando el hook `useState`.

### Implementación ⚙️

[Codigo del ejercicio 3](/reactricardo/src/Components/contadorClicks.js)

<img src="reactricardo\videos\Ejercicio3.gif"/>

### Pruebas

Descargar un autoclicker y usarlo para que se registren muchos clicks para una de las pruebas. Otra prueba tiene que ser con tres clicks y otra con 15 clicks.

---

## Ejercicio 4: Aplicación de Tareas

### Detalles del Ejercicio

1. Crea una aplicación de lista de tareas (ToDoApp) que permita al usuario añadir tareas, marcarlas como completadas y borrarlas.
2. La aplicación debe tener un campo de texto para ingresar nuevas tareas y una lista de tareas mostradas debajo.
3. Cada tarea en la lista debe tener un checkbox para marcarla como completada y un botón para eliminarla.
4. Gestiona el estado de las tareas (añadir, completar, eliminar) utilizando `useState`.

### Implementación ⚙️

[Codigo del ejercicio 4](/reactricardo/src/Components/Tareas.js)

<img src="/reactricardo//videos/Ejercicio4.gif"/>

### Pruebas

Haz una prueba para añadir un par de tareas, otra prueba para completar una tarea y otra prueba para eliminar la tarea restante.

---

## Ejercicio 5: Gestor de Tareas con Estados Complejos y Local Storage

### Detalles del Ejercicio

1. Diseña una interfaz que permita al usuario introducir tareas con una categoría asociada (por ejemplo, trabajo, personal, estudio).
2. Proporciona la opción de seleccionar categorías de una lista predefinida o añadir una nueva.
3. Permite al usuario marcar tareas como completadas, editarlas o eliminarlas.
4. Añade la funcionalidad para filtrar tareas por categoría o estado (completado, borrado).
5. Uso de Local Storage para Persistencia de Datos.
6. Guarda las tareas y categorías en el Local Storage del navegador para que no se pierdan al recargar la página.
7. Carga las tareas guardadas cuando la aplicación se inicia.
8. Utiliza `useState` para manejar los diferentes estados de la aplicación (lista de tareas, categorías, filtro seleccionado).
9. Considera la utilización de `useReducer` si el manejo del estado se vuelve demasiado complejo con `useState`.

### Implementación ⚙️

[Codigo del ejercicio 5](/reactricardo/src/Components/TareasComplejas.js)

<img src="/reactricardo//videos/Ejercicio5.gif"/>

### Pruebas

Genera tareas con diversas categorías. Muestra la vista filtrada de cada categoría donde sólo aparezcan esas tareas. Marca algunas como completadas, elimina una y edita otra. Recarga la página y vuelve a mirar si están las tareas guardadas o no (deberían estar).

[Plan de Pruebas](Plan_de_Pruebas.xlsx)
