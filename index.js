console.log("Console Logging... My Income");

//REQUIRED
const pg = require('pg')
const express = require('express');
const app = express();
const reactEngine = require('express-react-views').createEngine();
const methodOverride = require('method-override')
const cookieParser = require("cookie-parser");
const sha256 = require('js-sha256');
const SALT = "salt256";

//INIT EXPRESS APP AND METHOD OVERRIDE FOR PUT/DELETE
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public')); //FOR CSS FILES
app.use(cookieParser());


//REACT ENGINE
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');



const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => console.log('~~~ 🌻 Hello huslers, welcome to My incomes! Tuning in to the waves of port 3000 🌻 ~~~'));

let onClose = function(){
  console.log("closing");
  server.close(() => {
    console.log('Process terminated');
    pool.end( () => console.log('Shut down db connection pool'));
  })
};
process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);



/*
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 * ======             CONFIGURATION          =========
 * ===================================================
 * ===================================================
 * ===================================================
 * ===================================================
 */



const pg = require('pg');
const url = require('url');

var configs;

if( process.env.DATABASE_URL ){

  const params = url.parse(process.env.DATABASE_URL);
  const auth = params.auth.split(':');

  configs = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true
  };

}else{
  configs = {
    user: 'apple',
    host: '127.0.0.1',
    database: 'mootrek',
    port: 5432
  };
}


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


// ************************************************
////DISPLAY OPENING PAGE///
// ************************************************

app.get('/', (request, response) => {
   response.send('Hello world')
  response.render('opening');
});

// ************************************************
///REGISTER//////
// ************************************************

app.get('/register/', (request, response) => {
  response.render('register');
});



app.post('/register', (request, response) => {
  let insertQueryText = "INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *";
  let hashedPw = sha256( request.body.password + SALT );
  const values = [ request.body.name, hashedPw ];
  pool.query(insertQueryText, values, (err, result)=> {
    if (err) {
      console.log("Sorry, you have an error", err);
      response.send("Sorry, you have an error")
    } else {
      let user_id = result.rows[0].id;
      let hashedCookie = sha256(SALT+user_id);
      response.cookie('name', request.body.name);
      response.cookie('loggedIn', hashedCookie);
      response.cookie('userId', user_id);
      response.redirect('/books/new/');
    }
    });
});


// ************************************************
//. LOGOUT
// ************************************************
app.get('/logout', (request, response) => {
    response.clearCookie('name');
    response.clearCookie('loggedIn');
    response.clearCookie('userId');
    response.redirect('/');
});