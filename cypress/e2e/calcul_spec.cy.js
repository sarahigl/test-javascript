describe('calculatrice test spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })
  //test fail h1 does not have class name 
  it('affiche un intitulé l operation réalisé :', () => {
    cy.get('h1')
    .contains("have.text", "AddingNumbers...")
  })
  it('affiche deux inputs :', ()=>{
    cy.get('.addingNumbers')
    .find('input')
    .should("have.length", 2)
  })
  it('affiche deux inputs vide:', ()=>{
    cy.get('.addingNumbers')
    .find('input')
    .should("have.value", '')
  })
  //test fail h2 does not have class name 
  it('affiche le bon symbole d operation :', ()=>{
    cy.get('h2').contains("have.text", "+")
  })
  it('affiche un bouton de calcul :', ()=>{
    cy.get('#calculBtn')
    .should("be.visible")
  })
  //test fail result doesn't display the result
  it('affiche un résultat de calcul au click :', ()=>{
    cy.get('#firstNumber')
    .type(2);
    cy.get('#secondNumber')
    .type(2);
    cy.get('#calculBtn').click();
    cy.get('#result').should('have.text', 4);
  })
})
  