const util = require('util');
const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/machineLearningAPI';

const {promisify} = require('util');

const dbConfig = {
  "host" : process.env.DB_HOST || "localhost",
  "user" : process.env.DB_USER || "",
  "password" : process.env.DB_PASSWORD || "",
  "database" : "machineLearningAPI",
  "port" : process.env.DB_PORT || 5432
}

const pool = new Pool(dbConfig);

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

const queryDB = (queryStr, experiementID, callback) => {

  pool.connect( (err, client, done) => {
    // Handle connection errors
    if(err){
      console.log('pool connection err:', err)
      return;
    }
    
    client.query(queryStr, experiementID, (err, result) => {
      done();
      if(err) {
        console.log('query error:', err)
        callback(err, null);
        return;
      } 
      callback(null, result);
    });
  });
}

// const queryDbAsync = async (queryStr, experiementID) => {
//   try{
//     client = await pool.connect();
//     client.query = util.promisify(client.query); 
//     return client.query(queryStr, experiementID);
//   } catch (err) {throw err}
// }


module.exports = {
  dbConfig
};
