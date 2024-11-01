describe('poke-test-api', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })
  it('la div poke liste doit exister', ()=>{
    cy.get('#pokeListe');
  })
  it('vérifier que le status de la réponse API est 200', ()=>{
    cy.request('GET', '/pokemon')
        .then((response)=>{
          if(response.status === 200 && response.body.ok){
            cy.log('api Ok');
          }else{
            cy.log('api non fonctionnelle')
          }
    })
  })
  it('vérifier que le temp de réponse API est inf à 2000ms', ()=>{
    const startTime = performance.now(); // Démarre le chrono
    cy.request('GET', '/pokemon').then((response)=>{
      const endTime = performance.now();
      const resultat = startTime - endTime;
      cy.log('fetch de API => ', resultat);
      expect(response.status).eq(200);
      expect(response.duration).to.be.lessThan(2000);
    })
  })
  it('doit vérifier que BULBASAUR est premier',()=>{
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon')
    .then((response)=>{
      //assertion 1 verification
      expect(response.body).to.have.property('results')
      //assertion 2 précision
      expect(response.body.results[0].name).to.eq('bulbasaur')
    })
  })
  //solus 1
  it('vérifier que la réponse contient les champs attendus name et url',()=>{
    cy.request('GET','https://pokeapi.co/api/v2/pokemon')
    .then((response)=>{
      expect(response.body).to.have.property('results')
      expect(response.body.results[0]).to.include.key('name','url')
    })
  })
  //solus 2
  it('vérifier que la réponse contient les champs attendus name et url solus 2',()=>{
    cy.request('GET','https://pokeapi.co/api/v2/pokemon')
    .then((response)=>{
      response.body.results.forEach((pokemon)=>{
        expect(pokemon).to.include.keys('name','url')
      })
    })
  })
 /*
 correction : 
 /*
 it('la div poke liste doit exister', () => {
    cy.get('#pokeListe').should('exist') 
  })
  it('doit vérifier que le status de la réponse API est 200', () => {
    cy.request('/pokemon')
        .its('status')//is there a status 200 in it
        .should('equal', 200)
        //2nd version
    // .then((response) => {
    //   expect(response.status).to.eq(200);
    // });
  });
  it('doit vérifier que le temp de réponse API est inf à 2000ms', () => {
    const startTime = performance.now(); // Démarre le chrono
    cy.request('GET','/pokemon').then((response) => {
      const endTime = performance.now(); // Arrête le chronom
      const duration = endTime - startTime; // Calcule la durée
      expect(duration).to.be.lessThan(2000);
    });
  });
  it('doit vérifier que BULBASAUR est premier', () => {
    cy.intercept('GET', '/pokemon').as('getPokemon')
    cy.get('#pokeListe p').eq(0).should('have.text', 'bulbasaur')
  });
  it('Devrait vérifier que la réponse contient les champs attendus name et url', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon').then((response) => {
        expect(response.body).to.have.property('results'); // Vérifie que 'results' est présent
        expect(response.body.results[0]).to.have.all.keys('name', 'url'); // Vérifie les clés de chaque Pokémon
    });
  });
 */
})
