class Register{

    inputUsername(username){
        cy.get('[name="username"]').type(username);
    }

    inputUsernameAdess(email){
        cy.get('[name="email"]').type(email);
    }

    inputPassword(password){
        cy.get('[name="password"]').type(password);
    }
}

export default new Register();