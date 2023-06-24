/// <reference types='cypress' />

describe('learn about the locators', () => {
    it('visit google home page', () => {
        cy.visit('https://www.google.com/')
    });
    it('can locate button on the page', () => {
        cy.get('[name="q"]')
        .should("be.visible")
        .and("have.class", "gLFyf")
        .and("have.value", "")
        .and("have.attr", "data-ved", "0ahUKEwiRoPn6_tv_AhXQplYBHVI5DToQ39UDCAQ")
    });
    

});