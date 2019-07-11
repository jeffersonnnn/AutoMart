import Orders from '../models/ordersModel';
import Cars from '../models/carsModel';

class OrderController {
  static async postOrder(req, res) {
    try {
      const postOrder = await Orders.createOrder(req.body, req.authUser.id);
      const {
        price_offered, car_id, status,
      } = req.body;
      const foundCar = await Cars.findById(car_id);
      return res.status(201).json({
        status: 201,
        data: {
          id: postOrder[0].id,
          car_id,
          created_on: postOrder[0].created_on,
          status,
          price: foundCar[0].price,
          price_offered,     
        },
      });
    } catch (error) {
      return res.status(500).json({
        sucess: false,
        error: 'Server error',
        message:
          process.env.NODE_ENV === 'production'
            ? 'Server down. Please try again later'
            : error.message,
      });
    }
  }
}

export default OrderController;
