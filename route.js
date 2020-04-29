module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const pokemonControllerCallbacks = require('./controllers/pokemon')(allModels);
  const things = require('./controllers/students')(allModels);
  app.get('/mythings', things.sayHey);

  app.get('/pokemons', pokemonControllerCallbacks.index);
  //app.get('/pokemons/:id', pokemons.getPokemon);

  const bananaCallback = (request, response)=>{
    response.send("WWWow");
  }

  app.get('/banana', pokemonControllerCallbacks.foobar);
};