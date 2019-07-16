
import pool from './pool'

const dropUsersTable = () => {
  const queryText = `DROP TABLE IF EXISTS users CASCADE;
                    DROP TABLE IF EXISTS orders CASCADE;
                    DROP TABLE IF EXISTS cars CASCADE;
                    DROP TABLE IF EXISTS flags CASCADE;`                 
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
  await dropUsersTable();
})();
