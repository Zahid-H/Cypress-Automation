/// <reference types='cypress'/>


describe ('Testcase 3', function(){
    beforeEach(() => {
        cy.visit('https://example.cypress.io')
    });

    it('Checking "type"  navigats the new URL', function(){
        

        cy.contains('type').click()
        cy.url().should('include', '/commands/actions')

        cy.get('.action-email').type('fake@email.com')

        // cy.get('.action-email').should('have.value', 'fake@gmail.com')
       
        
    })
})