describe('My first test', () => {
    it('test1 verify title-positive', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/') // change URL to match your dev URL
      cy.title().should('eq','OrangeHRM')
    
    })
    it('test2 verify title-negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/') // change URL to match your dev URL
        cy.title().should('eq','OrangeHRM123')
      
      })
  })
  