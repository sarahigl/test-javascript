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
  it('affiche un résultat de calcul au click :', ()=>{
    cy.get('#firstNumber')
    .type(2);
    cy.get('#secondNumber')
    .type(2);
    cy.pause()
    cy.get('#calculBtn').click();
    cy.pause()
    cy.get('#result').contains(4);
  })
  
it("L'app doit additionner 2 nombres positifs", () => {
    cy.get('#firstNumber').type(3);
    cy.get('#secondNumber').type(4);
    cy.get('#calculBtn').click();
    cy.get('#result').should('have.text', '7');
});

it("L'app doit additionner 2 nombres négatif", () => {
    cy.get('#firstNumber').type(-2);
    cy.get('#secondNumber').type(-3);
    cy.get('#calculBtn').click();
    cy.get('#result').should('have.text', '-5');
});

it("L'app doit  gérér correctement des nombres décimaux", () => {
    cy.get('#firstNumber').type(2.5);
    cy.get('#secondNumber').type(1.5);
    cy.get('#calculBtn').click();
    cy.get('#result').should('have.text', '4');
});

it("L'app doit afiicher ' ' (rien) initialement", () => {
    cy.get('#result').should('have.text', 'Résultat : ');
});

it('Devrait gérer addition avec  un zero', () => {
    cy.get('#firstNumber').type(0);
    cy.get('#secondNumber').type(5);
    cy.get('#calculBtn').click();
    cy.get('#result').should('have.text', '5');
});

it('Devrait gérer addition avec 2 nombre à zeros', () => {
    cy.get('#firstNumber').type(0);
    cy.get('#secondNumber').type(0);
    cy.get('#calculBtn').click();
    cy.get('#result').should('have.text', '0');
});

it('devrait gérer des grand nombre  positifs', () => {
    cy.get('#firstNumber').type(1000000000);
    cy.get('#secondNumber').type(500000000);
    cy.get('#calculBtn').click();
    cy.get('#result').should('have.text', '1500000000');
});

it('devrait gérer des grand nombre  negatifs', () => {
    cy.get('#firstNumber').type(-1000000000);
    cy.get('#secondNumber').type(-500000000);
    cy.get('#calculBtn').click();
    cy.get('#result').should('have.text', '-1500000000');
});

it('devrait gérer input type text ?', () => {
    cy.get('#firstNumber').type('abc');
    cy.get('#secondNumber').type(2);
    cy.get('#calculBtn').click();
    // Vérifie que le résultat n'est pas un nombre
    cy.get('#result').should('not.have.text', 'NaN');
});

it('devrait gérer des champs vide', () => {
    cy.get('#calculBtn').click();
    cy.get('#result').should('not.have.text', 'NaN');
});
})
  