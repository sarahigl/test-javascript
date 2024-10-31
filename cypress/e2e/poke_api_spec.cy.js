describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })
  it('la div poke liste doit exister', () => {
    cy.get('#pokeListe') 
  })
  it('doit vérifier que le status de la réponse API est 200', () => {
    cy.request('GET','https://pokeapi.co/api/v2/pokemon')
    // .should("have.value", 200)
  })
})