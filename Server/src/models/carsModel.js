import queryDB from './dbQuery';

class Cars {
  static async findById(id) {
    const sql = 'SELECT * FROM cars WHERE id = $1;';
    const params = [id];

    const query = queryDB(sql, params);

    return query;
  }

  static async postCars(newAd, owner) {
    const {
      manufacturer, model, price, state, body_type
    } = newAd;

    const sql = 'INSERT INTO cars(owner, state, price, manufacturer, model, body_type) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
    const params = [owner, state, price, manufacturer, model, body_type];
    const query = queryDB(sql, params);
    return query;
  }

  static async adjustCarStatus(id, status) {
    const sql = 'UPDATE cars SET status = $1 WHERE id = $2 RETURNING *';
    const params = [status, id];
    const query = queryDB(sql, params);
    return query;
  }

  static async adjustCarPrice(id, price) {
    const sql = 'UPDATE cars SET price = $1 WHERE id = $2 RETURNING *';
    const params = [price, id];
    const query = queryDB(sql, params);
    return query;
  }

  static async getAvailableCars(status) {
    const sql = 'SELECT * FROM cars WHERE status = $1;'
    const params = [status];

    const query = queryDB(sql, params);

    return query;
  }
}

export default Cars;
