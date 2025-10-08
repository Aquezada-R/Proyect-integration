import Links from "../support/Pages/Links";
import ElRelato from "../support/Pages/El-relato";
import Login from "../support/Pages/Login";

describe("pruebas sobre el articulo creado anteriormente", () => {
    beforeEach(() => {
        Links.artiCKcReate();
    });

    it('Prueba positiva sobre el articulo', () => {
       cy.get('span > [href="#/login"]').click();

      //  ingreso de credenciales validas
        Login.inputUsername("manhattam@avenue.com");
        Login.inputPassword('12345');
        cy.get('.btn').click();

        cy.get('.dropdown > .nav-link').click();
        cy.get('[href="#/profile/testuserfelipefelipefelipefelipefelipe"]').click();
       cy.contains('el relatoalgo de un tipo un poco especial') .should('be.visible').click(); 
       //botones de edicion y eliminacion
       ElRelato.Edit();
       cy.get('[name="title"]').clear();
       ElRelato.arTiTle('algo especial');
       cy.get('.btn').click();
       cy.contains('Update Article').click();
       cy.get('.form-control').should('be.visible').type('esto es una prueba de edicion del articulo');
       cy.contains('Post Comment').click(); 
       cy.get('div.card').should('be.visible', 'have.value', 'esto es una prueba de edicion del articulo');
    })
})