import queryQB from './dbQuery';

class Cars {
  static async postCars(newAd, owner) {
    const {
      manufacturer, model, price, state, status, body_type,
    } = newAd;

    const sql = 'INSERT INTO cars(owner, state, status, price, manufacturer, model, body_type) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const params = [owner, state, status, price, manufacturer, model, body_type];
    const query = queryQB(sql, params);
    return query;
  }
}

export default Cars;
