const express = require('express');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const routes = require('./routes.js');
//const db = require('../database/index.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// use morgan to log incoming reuests
//app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Mehods','GET, POST, PUT, PATCH, DELETE');
    return res.status(200).json({}); 
  } 
  next();  
});

app.use( (req, res) => {
  res.send("hello world");
});

//app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});