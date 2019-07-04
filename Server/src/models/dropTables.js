
import pool from './pool';

const dropUsersTable = () => {
  const queryText = `DROP TABLE IF EXISTS users CASCADE;
                    DROP TABLE IF EXISTS orders CASCADE;
                    DROP TABLE IF EXISTS cars CASCADE;
                    DROP TABLE IF EXISTS flags CASCADE;`;                            
  return pool.connect().then((client) => {
    client.query(queryText)
      .then(() => {
        client.end();
      })
      .catch(() => {
      });
  });
};

(async () => {
  await dropUsersTable();
})();
