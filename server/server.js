const express = require('express');
const app = express();
//Debugging
const morgan = require('morgan');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'duckDuckGoose',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();

//Server static files
app.use(express.static('public'));

//Debugging routes
app.use(morgan('common'));

//Use body parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Routes
app.get('/', (req, res) => {
    res.send("Hello World!!!!");
});


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});