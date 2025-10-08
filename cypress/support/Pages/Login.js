class Login{

    inputUsername(email){
        cy.get('[name="email"]').type(email);
    }

    inputPassword(password){ 
        cy.get('[name="password"]').type(password)
}
    inputSecondUsername(username){
        cy.get('[name="username"]').type(username);
    } 
    imageCampo(img){
        cy.get('[name="image"]').type(img);
    }
    information(info){
        cy.get('[name="bio"]').type(info);
    }
    
}


export default new Login();