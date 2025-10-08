import Articulo from "../support/Pages/Articulo";
import Links from "../support/Pages/Links";


describe('test de llenar un articulo', () => {
    beforeEach('Link para ir directamente al perfil', () => {
    Links.articLink();
    })

    it.only('llenar el articulo', () => {
        cy.get('[href="#/login"]').should('be.visible').click();
          cy.get('[name="email"]').type('manhattam@avenue.com'); //ingreso de usuario
          cy.get('[name="password"]').type('12345');
          cy.get('.btn').click();
          cy.contains('New Article').should('be.visible').click();
           
        Articulo.artiTitle('el relato');
        Articulo.descrpitt('en una noch hermosa y estrellada que todo veia pero nadie hablaba decia glugluglu');
        Articulo.inputBody('ayer tuve un am que hoy me abandono por que no me queria, fue tanta mi ilusion por hacerla feliz pero hoy todo fue en bano',
        'sus juramentos falsos trajeron a mi alma falsos sentimientos, hoy se que buscas a ptrp hombre y tienes otro amor dejandome a mi, abandonado en esta soledad')
        Articulo.inputTag("no se eso mismo");
        cy.get('.btn').click();
    });
})