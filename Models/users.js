/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  const stuff = ()=>{
    console.log("hey workssss FROM MODEL");
  };

  const getAllDogs = (myControllerCallback)=>{
    let query = "SELECT * FROM dogs";
    console.log("getting all dogs");

    const myQueryReturn = (error, queryResult) => {
      console.log(queryResult.rows)
      myControllerCallback( queryResult.rows);
      // myControllerCallback( 1231231232 );
      // response not defined
      //response.send(queryResult.rows)
    };

    // pool.query(query, (error, queryResult) => {
    // let stuff =  pool.query(query, (error, queryResult) => {
    dbPoolInstance.query(query, myQueryReturn);
  };
  return {
    hello : stuff,
    getAllDogs : getAllDogs
  };
};