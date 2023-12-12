Notas potentes
• Adaptar el proyecto de gestor de notas para que si le indicamos argumentos, acceda directamente a la opción seleccionada.
• Añadir en el package.json unos scripts para atajar la ejecución de notas entrando directamente a las opciones.
• Aplicar la configuración de nodemon, ESlint y VSCode al proyecto de notas.
• Implementar la estructura para el proyecto de notas aplicando la división del código en los
distintos módulos.
• Crear un servidor con rutas para el programa de notas. Ha de contener:
Aplicar buenas prácticas
Logger bien configurado
Control de errores
Estructura de carpetas MVC
Cobertura de test superior al 80%
Realización de colección

//nuevas cosas
• Añadir seguridad al proyecto notas con un token encriptado y con el nombre de un usuario
admin dado por variable de entorno

Incluir en el proyecto de notas la posibilidad de ordenar, filtrar y paginar las notas.
Ideas de implementación:
• Ordenación:
– Por fecha de creación/edición
– Por título
– Por tamaño
• Filtro:
– Contiene un texto en el titulo
– Contiene un texto en el contenido
– Igual a una categoría o grupo
– Pertenece a un rango de fechas según creación/actulización
• Paginado:
– Establecer un valor de elementos por página por defecto
– Mostrar el total de elementos
– Mostrar el total de páginas

Sobre el proyecto de notas:

• Permitir importar (subir) uno o varios ficheros de extensión .note para almacenarlo directa-
mente

• Permitir exportar las notas para descargar directamente los ficheros fuente
– Para mejor usabilidad, implementar filtros para la selección de notas

//cosas que chatgpt me dice que mejore:

Tarea 1: Rescatar el ejercicio de notas del tema 6
Dado que ya has compartido tu proyecto y hemos revisado sus partes, parece que ya has rescatado el ejercicio de notas.

Tarea 2: Adaptar el proyecto para acceder directamente a la opción seleccionada
Para lograr esto, necesitarás modificar el script de inicio de tu aplicación en el archivo index.js o app.js para que pueda recibir argumentos de línea de comandos y actuar en consecuencia.

Tarea 3: Añadir scripts en el package.json para atajar la ejecución de notas
En tu package.json, puedes agregar scripts que te permitan ejecutar diferentes partes de tu aplicación fácilmente. Por ejemplo, puedes agregar scripts como "start": "node index.js" o "test": "ava" para ejecutar tu aplicación y pruebas respectivamente.

Tarea 4: Aplicar la configuración de nodemon, ESLint y VSCode
Nodemon: Instala nodemon como dependencia de desarrollo y agrégalo como un script en tu package.json. Puedes ejecutar tu aplicación con nodemon para reiniciar automáticamente cuando detecte cambios.

ESLint: Asegúrate de tener un archivo de configuración .eslintrc en tu proyecto y ajusta las reglas según las convenciones que desees seguir.

VSCode: Puedes incluir configuraciones específicas para VSCode en un archivo .vscode/settings.json para mejorar la experiencia de desarrollo.

Tarea 5: Implementar la estructura del proyecto aplicando la división del código en módulos
Ya has organizado tu código en carpetas según la estructura MVC, por lo que parece que ya has abordado esta tarea.

Tarea 6: Crear un servidor con rutas para el programa de notas
Asumiendo que ya has implementado rutas para tu aplicación de notas en archivos como routes/notas.js, debes asegurarte de seguir buenas prácticas, configurar un logger, controlar errores y alcanzar una cobertura de prueba superior al 80%. Puedes utilizar herramientas como express-validator para mejorar la validación de las rutas.

Consejo Adicional:
Asegúrate de que tu servidor esté configurado para escuchar el puerto adecuado y que puedas acceder a tus rutas correctamente. Considera el uso de entornos (por ejemplo, development y production) para gestionar configuraciones específicas.
