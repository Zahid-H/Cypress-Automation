/// <reference types='cypress' />

describe('Test 1 interact with input field', () => {

    beforeEach(() => {
        cy.visit('https://google.com');
    });
    // it('Visiting the google page', () => {
    //     cy.visit('https://google.com');
        
    // });
    it('click on the text field', () => {
        // cy.visit('https://google.com');
        cy.get("[name='q']").click();
        cy.get('.erkvQe > .OBMEnb').should("be.visible").contains("Trending Searches");
        cy.get("[class='lnXdpd']").click();
    });

});