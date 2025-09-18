# Historias De Usuario

## Backlog Inicial (Tareas QA)
|**HU** | **Tarea** | **Herramienta**|
|-----|-------|----------------------------------------------------|
| HU1 | Crear collection en Postman para buscar libros | Postman|
|HU1 |Crear tests automatizados en Cypress para la UI de búsqueda | Cypress|
|HU2 | Crear requests de registro y login en Postman | Postman|
|HU2 | Validar JWT en Cypress para rutas protegidas | Cypress|
|HU3 | Crear pruebas de agregar/eliminar libro en Postman | Postman|
|HU3 | Automatizar UI de biblioteca personal en Cypress | Cypress|
|HU4 | Configurar plan de prueba de carga en JMeter | JMeter|
|HU4 | Generar reportes de performance y errores | JMeter|
|HU5 | Crear workflow en n8n para alertas | n8n|
|Todas | Configurar pipeline en Jenkins con ejecución de tests | Jenkins|
|Todas | Versionar todo el proyecto en GitHub | Git/GitHub|

## HU1 - Búsqueda de libros

* Como usuario registrado
* Quiero poder buscar un libro por título o autor
* Para encontrar la información que necesito rápidamente.

### Criterios de aceptación

1. La UI debe permitir ingresar texto de búsqueda y mostrar resultados en menos de 2 segundos.

2. La API /BookStore/v1/Books debe retornar libro(s) por título o autor.

3. Cada resultado debe incluir: título, autor, género, número de páginas, y descripción.

4. Debe manejar búsqueda con resultados múltiples y sin resultados (mensaje de error “No se encontraron libros”).

### No funcionales

1. Tiempo máximo de respuesta: 2 segundos.

2. Manejo de errores HTTP: 400 para solicitudes inválidas, 500 para errores de servidor.

## HU2 - Autenticación de usuarios

* Como usuario
* Quiero poder registrarme e iniciar sesión
* Para tener acceso a funcionalidades privadas como la gestión de mis libros.

### Criterios de aceptación

1. Registro vía API con username y password.

2. Login vía API devuelve un token JWT.

3. Token debe expirar después de cierto tiempo.

## HU3 - Gestión de biblioteca personal

* Como usuario autenticado
* Quiero agregar y eliminar libros de mi biblioteca
* Para gestionar mi lista de lectura personalizada.

### Criterios de aceptación

1. Se debe poder agregar un libro usando ISBN.

2. Se debe poder eliminar un libro de la biblioteca.

3. La UI debe reflejar los cambios al refrescar la página

