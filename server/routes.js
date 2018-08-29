const express = require('express');
const db = require('../database/index.js');

const router = express.Router();


//REST for create, retreive, modify, delete and experiment
router.get('/', (req, res, next) => {

});

//train, test, predict
router.post('/train', (req, res, next) => {
  //opens up a data file and creates modle
});

router.post('/test', (req, res, next) => {
  //opens up a data file and tests the modle, 
  //stores error in result?

});

router.post('/predict', (req, res, next) => {
  //takes inputs and returns an predicted output
});

module.exports = router;