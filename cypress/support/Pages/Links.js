class Links {
      
    HomePageLink() {
        cy.visit('https://demoqa.com/');
    }

    loginPageLink() {
        cy.visit('https://demoqa.com/login');
    }

    booksPageLink() {
        cy.visit('https://demoqa.com/books');
    }
}

export default new Links();