import queryDB from './dbQuery';

class Orders {
  static async createOrder(order, buyer) {
    const { price_offered, status, car_id } = order;
    const sql = 'INSERT INTO orders(buyer, car_id, price_offered, status) VALUES ($1, $2, $3, $4) RETURNING *';
    const params = [buyer, car_id, price_offered, status];
    const query = queryDB(sql, params);
    return query;
  }
}

export default Orders;
