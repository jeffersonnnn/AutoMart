const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const {PRODUCTION_URL, DATABASE_URL, TEST_URL, NODE_ENV} = process.env

const getConnection = (env) => {
 switch(env){
   case 'production':
     return PRODUCTION_URL;
   case 'test':
     return TEST_URL;
   default:
     return DATABASE_URL
 }
 }
const pool = new Pool({
 connectionString: getConnection(NODE_ENV)
});



export default pool
