import queryDB from './dbQuery';

class Orders {
  static async findByOrder(id) {
    const sql = 'SELECT * FROM orders WHERE id = $1;';
    const params = [id];

    const query = queryDB(sql, params);

    return query;
  }

  static async createOrder(order, buyer) {
    const { price_offered, car_id } = order;
    const sql = 'INSERT INTO orders(buyer, car_id, price_offered) VALUES ($1, $2, $3) RETURNING *';
    const params = [buyer, car_id, price_offered];
    const query = queryDB(sql, params);
    return query;
  }

  static async adjustOrderPrice(id, price_offered) {
    const sql = 'UPDATE orders  SET price_offered = $1 WHERE id = $2 RETURNING *';
    const params = [price_offered, id];
    const query = queryDB(sql, params);
    return query;   
  }
}

export default Orders;
