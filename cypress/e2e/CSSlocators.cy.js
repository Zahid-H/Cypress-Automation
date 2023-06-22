describe('CSSLocators', () => {
    it('csslocators', () =>{
        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("Dhaka,Bangladesh")
        cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnK']").click()
        // cy.get("").contains("")
    })
})