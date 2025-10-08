import Links from "../support/Pages/Links";

describe('Home Page', () => {
    beforeEach(() => {
        Links.homePageLink();
    });

    it('Verificacion de URL y logos con redirecciones', () => {
        cy.url().should('eq', 'https://conduit-realworld-example-app.fly.dev/#/'); //link de home page
        cy.get('a.navbar-brand').should('be.visible').and('have.text', 'conduit'); 
        cy.get('a.navbar-brand').click();  //click en el logo principal
        cy.url().should('eq', 'https://conduit-realworld-example-app.fly.dev/#/');
        cy.get(':nth-child(2) > .nav-link').click(); //click en el link de login
        cy.url().should('eq', 'https://conduit-realworld-example-app.fly.dev/#/login');
        
        cy.get('a.nav-link[href="#/register"]').should('be.visible').and('contain', 'Sign up');
        cy.get('a.nav-link[href="#/register"]').click();  //click en el link de registrer
        cy.url().should('eq', 'https://conduit-realworld-example-app.fly.dev/#/register');
        cy.contains('a.nav-link', 'Home').should('be.visible').and('contain', 'Home').click();  //click en el link de home
        cy.url().should('contain', 'https://conduit-realworld-example-app.fly.dev/#/');
    });
});