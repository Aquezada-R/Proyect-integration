# Plan de Práctica con las Herramientas

1. Postman → probar endpoints de registro, login, búsqueda de libros, agregar/eliminar.

2. Cypress → pruebas E2E en la UI de búsqueda de libros + integración con API.

3. JMeter → pruebas de carga sobre los endpoints más usados (/BookStore/V1/Books, /Account/v1/Login).

4. Jenkins → pipeline CI/CD que ejecute:

5. Tests de Postman (Newman)

6. Tests de Cypress

7. Tests de JMeter

8. n8n → automatizar alertas (ejemplo: si una prueba falla, mandar un correo o Slack).

9. Git/GitHub → versionado de tu suite de pruebas y pipeline.

