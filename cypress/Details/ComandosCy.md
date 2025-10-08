# Comandos utilizados en las pruebas y que hacen

## Enlace a cheet sheet
* https://docs.cypress.io/api/commands/and

## Comandos para traer datos
~~~ 
cy.visit();
Tre un URL y navega en ella.

cy.get();
Trae un objeto del DOM por selector.
"." para clases.
"#" para ID.
"[]" para atributo.

cy.contains();
Trae un elemento del DOM por el nombre que tiene o lo que contiene.
Ej: cy.contains('title', 'la cocina');
Ej: cy.contains('ticketazo').should('contain', 'ticketazo');
~~~

## Comandos para assercione y waits
~~~
.should(); se usa para validar que se recibio lo esperado.
Ej: cy.get('').should('contain', 'titulo'); 
~~~

## Comandos de acciones
~~~
.click();  un solo click.
.type(); 


~~~

## Comandos especificos de ciertos atributos o selectores
~~~

~~~

## Comandos para pruebas de apis
cy.request();
cy.interceptor();