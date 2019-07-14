import pool from './pool';

/**
 * Create users table
 */
const createUsersTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS 
      users(
        id SERIAL PRIMARY KEY NOT NULL,
        email VARCHAR(30) UNIQUE NOT NULL,
        firstname VARCHAR (40) NOT NULL,
        lastname VARCHAR(40) NOT NULL,
        password VARCHAR(128) NOT NULL,
        address VARCHAR(40),
        is_admin BOOLEAN DEFAULT false
    )`;
  return pool.connect().then((client) => {
    return client.query(queryText)
      .then((res) => {
        /* eslint-disable no-console */
        console.log(res.rows);
        client.end();
      })
      .catch((err) => {
        /* eslint-disable no-console */
        console.log(err);
        client.end();
      });
  });
};


/**
* Create create cars table
*/


const createCarsTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS 
      cars(
        id SERIAL PRIMARY KEY NOT NULL,
        owner INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
        created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),
        state VARCHAR (40) NOT NULL,
        status VARCHAR(13) DEFAULT 'available',
        price FLOAT NOT NULL,
        manufacturer VARCHAR(255) NOT NULL,
        model VARCHAR(255) NOT NULL,
        image_url VARCHAR(200) NOT NULL,
        body_type VARCHAR (255) NOT NULL
    )`;

  return pool.connect().then((client) => {
    return client.query(queryText)
      .then((res) => {
        console.log(res.rows);
        client.end();
      })
      .catch((err) => {
        console.log(err);
        client.end();
      });
  });
};
/**
* Create Order Table
*/

const createOrdersTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS 
      orders(
        id SERIAL PRIMARY KEY NOT NULL,
        buyer INTEGER REFERENCES users(id) ON DELETE CASCADE NOT NULL,
        car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE NOT NULL,
        created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),
        price_offered FLOAT NOT NULL,
        status VARCHAR(13) DEFAULT 'pending' 
    )`;

  return pool.connect().then((client) => {
    return client.query(queryText)
      .then((res) => {
        console.log(res.rows);
        client.end();
      })
      .catch((err) => {
        console.log(err);
        client.end();
      });
  });
};

/**
* Create create flags table
*/


const createFlagsTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS 
      flags(
        id SERIAL PRIMARY KEY NOT NULL,
        car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE NOT NULL,
        created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),
        reason VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL
    )`;

  return pool.connect().then((client) => {
    return client.query(queryText)
      .then((res) => {
        console.log(res.rows);
        client.end();
      })
      .catch((err) => {
        console.log(err);
        client.end();
      });
  });
};

(async () => {
  await createUsersTable();
  await createCarsTable();
  await createOrdersTable();
  await createFlagsTable();
})();


// owner INTEGER REFERENCES users(id),
