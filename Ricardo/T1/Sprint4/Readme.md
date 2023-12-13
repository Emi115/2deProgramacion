# Boletín de Ejercicios - Sprint 5

## Descripción del ejercicio

Para consolidar los conocimientos adquiridos en la parte teórica, resolveremos los siguientes ejercicios en el orden correcto. A continuación, se detallan los criterios para la resolución de cada ejercicio.

## Fases de la resolución de problemas

1. **Análisis del problema:** En el directorio específico de la asignatura, se debe proporcionar una descripción clara y sin ambigüedades del problema a resolver.
2. **Diseño de la propuesta de solución:** Utilizando herramientas como UML o diagramas de flujos, se debe diseñar la solución antes de la implementación.
3. **Implementación del diseño propuesto:** Llevar a cabo la implementación del diseño establecido en el paso anterior.
4. **Pruebas de la resolución del problema:** Realizar pruebas para verificar la integridad y el correcto funcionamiento de la implementación.

## Ejercicio 1: Información Básica del Pokémon

### Descripción:

Realizar una petición a la PokeAPI para obtener información básica de un Pokémon por su nombre. Mostrar el nombre, id, tipos, y una imagen del Pokémon. Gestionar errores de manera adecuada si el Pokémon no existe.

#### Dos pruebas:

1. Realizar dos búsquedas sin error.
2. Realizar una búsqueda con error.

### Implementación ⚙️

- **Ejercicio 1:** [Información Básica del Pokémon](/ejercicio1/index.html)
<img src="ejercicio1.gif"/>


## Ejercicio 2: Comparativa de Pokémon

### Descripción:

Obtener datos de dos Pokémon elegidos por el usuario. Comparar sus estadísticas base (stats) y determinar cuál de ellos tiene mejores estadísticas generales. Presentar los resultados en una tabla comparativa de fácil lectura.

#### Dos pruebas sin error.

### Implementación ⚙️

- **Ejercicio 2:** [Comparativa de Pokémon](/ejercicio2/index.html)
<img src="ejercicio2.gif"/>

## Ejercicio 3: Evoluciones y Habilidades

### Descripción:

Dado un Pokémon específico, buscar su cadena de evolución completa. Listar cada una de las formas evolutivas y sus habilidades. Incluir un botón que permita al usuario ver más detalles de cualquier habilidad.

#### Dos pruebas:

1. Realizar una cadena evolutiva.
2. Realizar una prueba sin cadena evolutiva.

#### Pistas:

- pokemon/charmander -> pokemon-species/4/ -> evolution-chain/2/

### Implementación ⚙️

- **Ejercicio 3:** [Evoluciones y Habilidades](/ejercicio3/index.html)
  <img src="ejercicio3.gif"/>

## Ejercicio 4: Explorador de Películas

### Descripción:

Crear una aplicación web que permita a los usuarios explorar películas basándose en diferentes criterios como género. Usar la API The Movie DB (TMDB API).

#### Interfaz de Búsqueda:

Desarrollar una interfaz de usuario donde los usuarios puedan ingresar palabras clave o seleccionar filtros para buscar películas por género.

#### Mostrar Resultados:

Presentar los resultados de la búsqueda en un formato amigable para el usuario, mostrando detalles como el título de la película, año de lanzamiento, resumen y puntuación.

#### Paginación de Resultados:

Implementar la paginación para los resultados para que los usuarios puedan navegar a través de múltiples páginas de resultados.

#### Dos pruebas:

1. Buscar una película.
2. Aplicar un filtro para que aparezca el reel con paginación (Estilo Netflix, Amazon Prime Video). Sólo un filtro a la vez.

### Implementación ⚙️

- **Ejercicio 4:** [Explorador de Películas](/ejercicio4/index.html)

  <img src="ejercicio4.gif"/>

## Ejercicio 5: Películas favoritas

### Descripción:

Añadir al ejercicio 4 la capacidad de añadir/eliminar películas a una lista de favoritos.

#### Tres pruebas:

1. Añadir 10 películas a favoritos y comprobar que aparecen las 10 películas seleccionadas.
2. Eliminar la tercera y quinta película y comprobar que ya no aparecen.
3. Eliminar todas las películas y comprobar que no aparecen.

#### Notas:

- Registro en TMDb [aquí](https://www.themoviedb.org/signup).
- Generar el API Token [aquí](https://www.themoviedb.org/settings/api) (seleccionar Developer).

### Implementación ⚙️

- **Ejercicio 5:** [Películas favoritas](/ejercicio5/index.html)
<img src=ejercicio5.gif/>

[Plan de Pruebas](/Planpruebas.xlsx)
