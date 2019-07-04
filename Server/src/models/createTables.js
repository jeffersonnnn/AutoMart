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
        role INTEGER DEFAULT 0
    )`;
  return pool.connect().then((client) => {
    client.query(queryText)
      .then(() => {
        client.end();
      })
      .catch(() => {
        client.end();
      });
  });
};

/**
* Create cars table
*/


const createCarsTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS 
      cars(
        id SERIAL PRIMARY KEY NOT NULL,
        owner INTEGER REFERENCES users(id),
        created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),
        state VARCHAR (40) NOT NULL,
        status VARCHAR (40) NOT NULL,
        price VARCHAR(14) NOT NULL,
        manufacturer VARCHAR(40) NOT NULL,
        model VARCHAR(14) NOT NULL,
        body_type VARCHAR (40) NOT NULL
    )`;

  return pool.connect().then((client) => {
    client.query(queryText)
      .then(() => {
        client.end();
      })
      .catch(() => {
        client.end();
      });
  });
};
/**
* Create Order Table
*/

const createOrdersTable = () => {
  const queryText = ` CREATE TABLE IF NOT EXISTS 
      orders(
        id SERIAL PRIMARY KEY NOT NULL,
        users_id INTEGER, 
        FOREIGN KEY (users_id) REFERENCES users(id),
        cars_id INTEGER,
        FOREIGN KEY (cars_id) REFERENCES cars(id),
        amount VARCHAR(14) NOT NULL,
        status VARCHAR(13) DEFAULT 'pending' 
    )`;

  return pool.connect().then((client) => {
    client.query(queryText)
      .then(() => {
        client.end();
      })
      .catch(() => {
        client.end();
      });
  });
};


/**
* Create create flags table
*/


const createFlagsTable = () => {
  const queryText = 
    `
    CREATE TABLE IF NOT EXISTS 
      flags(
        id SERIAL PRIMARY KEY NOT NULL,
        car_id INTEGER,
        FOREIGN KEY (car_id) REFERENCES cars(id),
        created_on TIMESTAMP WITH TIME ZONE DEFAULT now(),
        reason VARCHAR(40) NOT NULL,
        description VARCHAR(40) NOT NULL
    )`;

  return pool.connect().then((client) => {
    client.query(queryText)
      .then(() => {
        client.end();
      })
      .catch(() => {
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
