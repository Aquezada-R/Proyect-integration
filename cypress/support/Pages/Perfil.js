class Perfil{
    
    firstBtn(){
       cy.get('.btn');
    }

    face(){
        cy.get('.user-img');
    }

    favorarticuls(){
        cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link');
    }
}

export default new Perfil();