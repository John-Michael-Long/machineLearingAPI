const express = require('express');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const routes = require('./routes.js');

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

//API:  /experiments/experimentID
app.use('/experiments', routes);

//if not found in route above then error
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

//handles errors from router
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  console.log('in error handler')
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});











