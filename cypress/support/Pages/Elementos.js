class Elementos {

    usernameInput = '#userName';
    passwordInput = '#password';
    direcctionInput = '#currentAddress';
    direcctionInput2 = '#permanentAddress'
    loginButton = '#login'

    controler(){
        cy.get(this.usernameInput).type(username);
        cy.get(this.passwordInput).type(password);
        cy.get(this.direcctionInput).type(direcction);
        cy.get(this.direcctionInput2).type(direcction2);
        cy.get(this.loginButton).type('Login').click();
    }
}

export default new Elementos();
