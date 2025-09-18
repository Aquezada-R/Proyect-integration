import Links from "../support/Pages/Links";
import Elementos from "../support/Pages/Elementos";


describe('Elementos', () => {
    before(() => {
        Links.HomePageLink();
    });

    it('TextBox', () => {
        Elementos.usernameInput("pepe");
        Elementos.direcctionInput("las caobas");
    });
});