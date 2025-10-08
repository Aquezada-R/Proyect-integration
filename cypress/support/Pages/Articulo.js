class Articulo{

    artiTitle(text){
        cy.get('[name="title"]').type(text);
    }
    
    descrpitt(description){
        cy.get(':nth-child(2) > [name="description"]').type(description);
    }
    
    inputBody(body){
        cy.get('[name="body"]').type(body);
    }

    inputTag(tags){
        cy.get('[name="tags"]').type(tags);
    }
}

export default new Articulo();