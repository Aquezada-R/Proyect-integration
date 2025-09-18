class Swagger {

    swaggerDocumentLink() {
        cy.visit('https://demoqa.com/swagger/#/BookStore');
    }

}

export default new Swagger();