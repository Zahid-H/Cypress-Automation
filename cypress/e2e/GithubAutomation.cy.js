/// <reference types="cypress" />


describe('Swag Lab website automation test', () => {

    //setting up the URL that we want ot visit every time execute a test
    beforeEach(() => {
        cy.visit("https://github.com/login");
    });
        

    it('login with the UserID and password', () => {

        cy.get('#login_field').type('Gihub.com');
        cy.get('#password').type('whatiscommit?');
        
        cy.get('[name="commit"]').click();
    });


});