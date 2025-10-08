import Links from "../support/Pages/Links";
import Login from "../support/Pages/Login";

describe('validacion del login, enlaces y coneccion entre modulos', () => {
    beforeEach(() => {
        Links.loginPageLink();
    });

    it('Verificacion de URL y logos con redirecciones', () => {
        cy.url().should('eq', 'https://conduit-realworld-example-app.fly.dev/#/login'); //link de login

       Login.inputUsername('manhattam@avenue.com'); //ingreso de usuario
         Login.inputPassword('12345');
         cy.get('.btn').click(); //click en el boton submit
         cy.contains('testuser').should('be.visible', 'have.value', 'testuser').click();
         cy.get('[href="#/settings"]').should( 'be.visible', 'have.value', 'Settings').click();
         
         Login.imageCampo('src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfGgn92qhnKhEx3qxqlvJjXec-eQFF_5i95Q&s"');
         Login.inputSecondUsername("felipe");
         Login.information("pepe el felipe de las iguanas del cartar que cuando subia en la frontera se iba hacia el cabrar, mi madre mdis");
         Login.inputPassword("12345");        
         cy.get('.btn').click();
         cy.url().should('eq', 'https://conduit-realworld-example-app.fly.dev/#/settings');
    });

    it('verificar los enlaces del perfil', () => {
         Login.inputUsername('manhattam@avenue.com'); //ingreso de usuario
         Login.inputPassword('12345');
         cy.get('.btn').click(); //click en el boton submit
         cy.contains('testuser').should('be.visible', 'have.value', 'testuser').click();
         cy.get('[href="#/settings"]').should('be.visible', 'have.value', 'Settings').click();
         cy.get('[href="#/profile/testuser"]').should('be.visible', 'have.value', 'Profile').click()

    });

    it("prueba de enlace", () => {
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('p.text-xs-center > a').click();
      cy.get('.pull-xs-left > .nav-item > .nav-link').click();
      cy.url().should('eq', 'https://github.com/TonyMckes/conduit-realworld-example-app');
    });

    it.only('salida de la aplicacion', () => {
       Login.inputUsername('manhattam@avenue.com'); //ingreso de usuario
         Login.inputPassword('12345');
         
         cy.get('.btn').click();
      cy.get('.dropdown > .nav-link').click();
      cy.contains('Logout').click();
    });
});
