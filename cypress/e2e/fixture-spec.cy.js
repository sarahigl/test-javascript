describe('test affichage des fixtures USER', () => {
  beforeEach(() => {
    cy.fixture('users-fixture.json').then(function (testData){
      this.testData = testData.user;
    })
  })
  it("Users", function(){
    this.testData.forEach(user => {
      cy.log(user.nom)
      cy.log(user.prenom)
      cy.log(user.mail)
      cy.log(user.password)
    });
  })
})