import pool from './pool';

export default async (sql, params = null) => (
  new Promise((resolve, reject) => (
    pool.connect().then(client => (
      client.query(sql, params).then(result => resolve(result.rows)).catch((error) => {
        reject(error);
      })
    ))
  ))
);
