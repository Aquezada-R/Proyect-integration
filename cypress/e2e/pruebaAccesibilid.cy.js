import Links from '../support/Links';

describe('Pruebas de accesibilidad', () => {
    beforeEach(() => {
      Links.homePageLinks(); // visita la página de inicio
    });
  it('Verificar accesibilidad en la página de inicio', () => {
    cy.injectAxe(); // inyecta axe-core
    cy.checkA11y(); // chequea accesibilidad
  });
});
