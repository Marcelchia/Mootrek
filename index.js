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