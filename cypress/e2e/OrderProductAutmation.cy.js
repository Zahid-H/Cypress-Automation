/// <reference types= "cypress"/>

describe('Adding product to the shopping cart', () => {
    beforeEach(() => {
        //viting the url
        cy.visit("https://magento.softwaretestingboard.com/")
    });
    it('Navigates from a product to purchase', () => {
        cy.contains("Hero Hoodie").click()
        //selecting product size
        // cy.get("#option-label-size-143-item-168").click('M')
        cy.contains("M").click()
        //selecting product color
        cy.get('[aria-labelledby="option-label-color-93"]').click()
        
        
        //Add to cart product
        
        
    });
    it('checking the item list in the cart', () => {
        cy.get(".action.showcart").click()
    });
});