# Boletín de Ejercicios - T2 Sprint 1

## Análisis General de los ejercicios

En este boletín se presentan cuatro ejercicios prácticos enfocados en el desarrollo con React, abarcando desde la navegación y gestión de rutas, manejo de formularios y validaciones, hasta la interacción con APIs externas y la implementación de autenticación y actualización de perfiles de usuario. Cada ejercicio plantea un desafío distinto, diseñado para reforzar conceptos clave del desarrollo frontend moderno.

## Ejercicio 1: Navegación con Parámetros de Ruta

### Detalles del Ejercicio

**Objetivo:** Crear una aplicación de perfil de usuario con React Router, donde cada perfil tenga su propia URL basada en el ID del usuario.

**Tareas:**

- Configurar React Router y envolver el componente `App` con `<BrowserRouter>`.
- Crear componentes `Inicio` y `PerfilUsuario`.
- Configurar rutas con `<Switch>` y `<Route>`, y usar `<Link>` para la navegación.
- En `PerfilUsuario`, extraer el ID del usuario de los parámetros de ruta y mostrar "Perfil del Usuario: [ID]".

### Implementación ⚙️

[Código del ejercicio 1](reactricardo/src/Components/Inicio/Inicio.js)

![Ejercicio 1](reactricardo/videos/Ejercicio1.gif)

### Pruebas

- Verificar correcta visualización de enlaces en la página de inicio.
- Comprobar que la URL cambia y que `PerfilUsuario` muestra el ID correcto al hacer clic en los enlaces.

---

## Ejercicio 2: Gestión de Formularios y Validaciones con React Hook Form

### Detalles del Ejercicio

**Objetivo:** Implementar un formulario de contacto validado con React Hook Form.

**Tareas:**

- Instalar React Hook Form y crear componente `FormularioContacto`.
- Agregar validaciones a los campos del formulario.
- Mostrar mensajes de error para validaciones fallidas.
- Manejar el envío del formulario mostrando un mensaje de éxito.

### Implementación ⚙️

[Código del ejercicio 2](reactricardo/src/Components/FormularioContacto/FormularioContacto.js)

![Ejercicio 2](reactricardo/videos/Ejercicio2.gif)

### Pruebas

- Validar visualización de mensajes de error al intentar enviar el formulario incompleto.
- Comprobar validaciones específicas y mensaje de éxito al enviar el formulario correctamente.

---

## Ejercicio 3: Buscador de Películas con API Externa

### Detalles del Ejercicio

**Objetivo:** Desarrollar una aplicación para buscar películas por nombre usando la API de OMDB y mostrar los resultados.

**Tareas:**

- Configurar el componente `BuscadorPeliculas` y realizar peticiones a la API de OMDB.
- Mostrar resultados de búsqueda y manejar estados de carga y errores.

### Implementación ⚙️

[Código del ejercicio 3](reactricardo/src/Components/BuscadorPeliculas/BuscadorPeliculas.js)

![Ejercicio 3](reactricardo/videos/Ejercicio3.gif)

### Pruebas

- Realizar búsquedas de películas y verificar la correcta visualización de resultados.
- Comprobar el manejo adecuado de errores y el indicador de carga.

---

## Ejercicio 4: Actualización de Perfil de Usuario con Autenticación

### Detalles del Ejercicio

**Objetivo:** Permitir a los usuarios actualizar su perfil, incluyendo la imagen, después de registrarse e iniciar sesión.

**Tareas:**

- Implementar autenticación y crear componentes para registro e inicio de sesión.
- Desarrollar componente `PerfilUsuario` para visualizar y editar información de perfil.
- Implementar carga y actualización de imagen de perfil y datos del perfil.

### Implementación ⚙️

### En este ejercicio he usado mi propia api y mi propio formulario de correo

No he usado firebase pero funciona todo el que tiene el rol de admin es el unico que puede acceder a crearsudadera

[Código del ejercicio 4](No disponible)
<br><br>

![Ejercicio 4](reactricardo/videos/Ejercicio4.gif)

### Pruebas

- Verificar registro, inicio de sesión y actualización de perfil, incluida la carga de imagen.
- Comprobar que los cambios se reflejan correctamente en la interfaz de usuario y en el servidor.

---

### Pruebas Generales

Para una guía detallada de pruebas de todos los ejercicios, consulte el [Plan de Pruebas](Plan_de_Pruebas.xlsx).
