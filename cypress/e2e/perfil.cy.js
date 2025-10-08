
import Links from "../support/Pages/Links";
import Perfil from "../support/Pages/perfil";


describe('validacion del perfil, enlaces y coneccion entre modulos', () => {
    beforeEach(() => {
        Links.perfilPageLink();
    });

    it("Verificar el logo del perfil", () => {
    Perfil.firstBtn()
    .click(); //click en el boton first
    cy.on('window:alert', (aviso) => {
        expect(aviso).to.equal(`You need to login first.`);
    });
    Perfil.face().should('be.visible');
    Perfil.favorarticuls().click(); //click en el boton favoritos    
});

it.only('Verificacion de URL y logos con redirecciones', () => {
    Perfil.firstBtn().click();

    cy.on('window:alert', (vea) => {
        expect(vea).to.equal("You need to login first.");
    }); //click en el boton first
    cy.get(':nth-child(2) > .nav-link').click(); //click en el link de login
});
});