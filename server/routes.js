const express = require('express');
const db = require('../database/index.js');

const router = express.Router();


//REST for create, retreive, modify, delete an experiment
router.get('/:experimentID', (req, res, next) => {

});

router.post('/:experimentID', (req, res, next) => {

});

router.put('/:experimentID', (req, res, next) => {

});

router.delete('/:experimentID', (req, res, next) => {

});

//MAY NEED ANOTHER ROUTER FOR THESE????
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