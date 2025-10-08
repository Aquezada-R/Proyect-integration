class Links{

    homePageLink(){
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/');
    }

    loginPageLink(){
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/login');
    }

    registrerPageLink(){
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/register');
    }

    perfilPageLink(){
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/profile/testuser');
    }

    articLink(){
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/profile/testuserfelipefelipefelipefelipefelipe');
    }

    artiCKcReate(){
        cy.visit('https://conduit-realworld-example-app.fly.dev/#/article/el-relato');
    }
}

export default new Links();