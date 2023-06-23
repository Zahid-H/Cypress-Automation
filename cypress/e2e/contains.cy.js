describe(' Testing the content', ()=>{
    it('find the content 1 "type"', ()=>{
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    })
    it('find the content 2 "hype"', ()=>{
        cy.visit('https://example.cypress.io')

        cy.contains('hype')
    })
})