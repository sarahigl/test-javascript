describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })
  it('la div poke liste doit exister', () => {
    cy.get('#pokeListe') 
  })
  it('doit vérifier que le status de la réponse API est 200', () => {
    cy.request('/pokemon').then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it('doit vérifier que le temp de réponse API est inf à 2000ms', () => {
    cy.request('/pokemon').then((response) => {
      expect(response.duration).to.be.lessThan(2000);
    });
  });
  it('doit vérifier que BULBASAUR est premier', () => {
    cy.request('GET', '/pokemon').then((response) => {
      //
    });
  });
})