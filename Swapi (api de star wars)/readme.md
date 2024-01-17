# Guía de Uso de la Aplicación de Personajes de Star Wars

Esta aplicación te permite buscar personajes de Star Wars y ver detalles importantes sobre ellos, como nombre, altura, peso, color de pelo, películas en las que aparecen, vehículos y naves espaciales asociados, entre otros.
Cómo Iniciar la Aplicación

    Abre la terminal y navega hasta la carpeta raíz de tu proyecto.

    Ejecuta el siguiente comando para iniciar el servidor:

    bash

    npm start

    Una vez que el servidor esté ejecutándose, abre tu navegador web.

# Cómo Realizar una Búsqueda

    En tu navegador, ve a http://localhost:3000.
    Verás un formulario de búsqueda titulado "Buscar Personaje de Star Wars".
    Escribe el nombre del personaje que deseas buscar en el campo de texto. Por ejemplo, "Luke Skywalker".
    Haz clic en el botón "Buscar".

# Visualización de Resultados

    Después de enviar tu búsqueda, la página mostrará una lista de personajes que coinciden con tu búsqueda.
    Para cada personaje, verás los siguientes detalles:
        Nombre
        Altura
        Peso
        Color de Pelo
        Color de Piel
        Color de Ojos
        Año de Nacimiento
        Género
        Mundo Natal
        Películas en las que aparece
        Especies
        Vehículos
        Naves Espaciales

# Notas Adicionales

    Si un personaje no tiene información en alguna de las categorías (como películas o especies), se mostrará un mensaje indicando que no se encontraron elementos en esa categoría.
    La aplicación realiza búsquedas en tiempo real utilizando la API de SWAPI, por lo que es posible que experimentes algunos retrasos en función de la velocidad de respuesta de la API.

Estas instrucciones están diseñadas para ser claras y fáciles de seguir, proporcionando a los usuarios una guía paso a paso sobre cómo utilizar la aplicación.