
import Links from "../support/Pages/Links";
import Register from "../support/Pages/Register";

describe('validacion del registro, enlaces y coneccion entre modulos', () => {
    beforeEach(() => {
        Links.registrerPageLink();
    });

    it('Verificacion de URL y logos con redirecciones', () => {
        cy.url().should('eq', 'https://conduit-realworld-example-app.fly.dev/#/register');
        Register.inputUsername('testuser');   
        Register.inputUsernameAdess('manhattam@avenue.com');
        Register.inputPassword('12345');
        cy.get('.btn').click(); //click en el boton submit   
    });
});