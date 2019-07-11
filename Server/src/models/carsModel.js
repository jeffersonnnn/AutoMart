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
      manufacturer, model, price, state, body_type, status,
    } = newAd;

    const sql = 'INSERT INTO cars(owner, state, price, manufacturer, model, body_type, status) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const params = [owner, state, price, manufacturer, model, body_type, status];
    const query = queryDB(sql, params);
    return query;
  }
}

export default Cars;
