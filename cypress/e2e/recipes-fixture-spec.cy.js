describe('recipe fixture test spec', () => {
  beforeEach(() => {
    cy.fixture('recipes-fixture.json').then(function (recipeData){
      this.recipeData = recipeData.recipe;
    })
  })
  //recipeData est undefined lorsque la fonction est fléché anonyme .. why ?
  it('Une recette doit etre composé de : nom, ingredients et instructions', function (){
    this.recipeData.forEach(recipe => {
      expect(recipe).to.includes.keys('name','ingredients', 'instructions')
    })
  })
  it("Recettes", function(){
    this.recipeData.forEach(recipe => {
      cy.log('Recette de : ',recipe.name)
      cy.log('ingredients :')
      for(let i=0; i<recipe.ingredients.length; i++){
        cy.log((i + 1) + ' : '+ recipe.ingredients[i])
      }
      cy.log('instructions : ',recipe.instructions)
    })
  })
  it('Plus de 3 ingredients dans chaque recette', function(){
   cy.fixture('recipes-fixture.json').then((recipes)=>{
    //we have object array so recipes.recipe.forEach else use recipe.forEach
    recipes.recipe.forEach((recipe)=>{
      expect(recipe.ingredients.length).to.be.greaterThan(3);
    });
   });
  })
})