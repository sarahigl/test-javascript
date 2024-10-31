describe('counter test', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })
  it('passes', () => {
    cy.get('#counter')
  })
  it('affiche un compteur intial à 0', () => {
    cy.get('#counter').should("have.text", "count is 0")
  })
  it('affiche un compteur à 1', () => {
    cy.get('#counter').click()
    cy.get('#counter').should('have.text', 'count is 1')
  })
  it('affiche un compteur à 3', () => {
    cy.get('#counter').click().click().click()
    cy.get('#counter').should('have.text', 'count is 3')
  })
  it('affiche logo 2', () => {
    cy.get('.logo.vanilla').should('be.visible')
  })
  it('affiche la documentation vite', () => {
    cy.get('.logo')
    .should('be.visible')
    .and('have.attr', 'src')
    .and('include', 'vite.svg');
  })
})