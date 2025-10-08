class Elrelato{
 
    Delete(){
        cy.contains('Delete Article');
    }

    Edit(){
         cy.contains('Edit Article').click();
    }

    ComentPost(){
        cy.contains('have.value', 'Post Comment');
    }
    arTiTle(text){
        cy.get('[name="title"]').type(text);
    }
}

export default new Elrelato();