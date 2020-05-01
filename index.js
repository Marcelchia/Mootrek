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

///////db.js///////

//const pg = require('pg');
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
  response.render('home');
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
      response.redirect('/login');
    }
    });
});


// ************************************************
//. LOGIN
// ************************************************
app.get('/login/', (request, response) => {
  response.render('login');
});




app.post('/login',(request, response)=>{
    console.log(request.body);
  let query = "SELECT * FROM users WHERE name='"+request.body.name+"'";
  console.log("MY QUERY: "+query)
  pool.query(query, (error, result)=>{
    if(error){
      console.log("ERRRR", error);
      response.status(500).send("error")
    } else {
      if ( result.rows.length === 0 ) {
        response.send("Please sign up for an account before logging in");
      } else {
        // hash the request, if its the same as db
        let hashedRequestPw = sha256( request.body.password + SALT);
        // if the password in the db matches the one in the login form
        if ( result.rows[0].password === hashedRequestPw ) {
            console.log("result rows+++++", result.rows[0].id)
          let user_id = result.rows[0].id;
          let hashedCookie = sha256(SALT+user_id);
          // response.cookie('loggedIn', true);
          response.cookie('name', request.body.name)
          response.cookie('loggedIn', hashedCookie);
          response.cookie('userId', user_id);
          // response.send( result.rows[0] );
          response.redirect('/income');
        }else{
          response.send("Your password is wrong! Try again!")
        }
      }
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


// ************************************************
//. LOGIN HOMEPAGE
// ************************************************


app.get('/income', (request, response) => {
  response.render('income');
});



// ************************************************
// ADD NEW INCOME STREAM
// ************************************************
app.get('/add', (req, res) => {
    res.render('add');
});






app.post('/add', (req, res) => {
  const queryText = "INSERT INTO income (user_id,description,amount,date) VALUES ($1, $2, $3, $4) RETURNING *";
  const values = [
    req.cookies.userId,
    req.body.user_id,
    req.body.description,
    req.body.amount
    req.body.date
  ];

  pool.query(queryText, values, (err, result) => {
    if (err) {
        console.log('Error', err)
    } else {
        console.log(result.rows)
/*    res.send('hello');*/
      res.render('add', result.rows[0])
    };
  });
});


// ************************************************
// DISPLAY TIME PERIOD SELECTION
// ************************************************


/////QQ how to select a range of dates//

app.get("/timeperiod", (req, res) => {
    const query = "SELECT * FROM income WHERE user_id =" + req.cookies.userId;

    pool.query(query, (err, result) => {

    const data = {
        allincomeList: result.rows
    }
    console.log(result.rows)
    res.render("timeperiod", data);
    });
})



// ************************************************
// DISPLAY ALL INCOME STREAMS
// ************************************************


app.get("/overview", (req, res) => {
    const query = "SELECT * FROM income WHERE user_id =" + req.cookies.userId;

    pool.query(query, (err, result) => {

    const data = {
        allincomeList: result.rows
    }
    console.log(result.rows)
    res.render("overview", data);
    });
})