module.exports = (db) => {

  let something = (request, response) => {
    response.send("CONTROLLLLLLLEERRRRR");
  };

  let indexControllerCallback = (request, response) => {

    // get all dogs
    // pool.query('SELECT * FROM dogs', ()=>)
    // db.pokemon.hello();
    const myCallback = ( allDogs )=>{
      console.log("MY CALLBACK INSIDE OF **CONTROLLER**", allDogs);
      response.send(allDogs);
    };
    // don't execute this here in controller
    // myCallback();

    db.pokemon.getAllDogs(myCallback);
    // pool.query(query,(err, result)=>{
    //   response.send("works and stuff");
    // })

  };

  return {
    index: indexControllerCallback,
    foobar : something,
  };

}