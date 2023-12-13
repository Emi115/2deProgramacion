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

