
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const {
  LOCAL_URL, DATABASE_URL, TEST_URL, NODE_ENV,
} = process.env;

const getConnection = (env) => {
  switch (env) {
    case 'production':
      return DATABASE_URL;
    case 'test':
      return TEST_URL;
    default:
      return LOCAL_URL;
  }
};
const pool = new Pool({
  connectionString: getConnection(NODE_ENV),
});


export default pool;
