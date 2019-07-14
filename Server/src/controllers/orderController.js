import Orders from '../models/ordersModel';
import Cars from '../models/carsModel';

class OrderController {
  static async postOrder(req, res) {
    try {
      const postOrder = await Orders.createOrder(req.body, req.authUser.id);
      const {
        price_offered, car_id,
      } = req.body;
      const foundCar = await Cars.findById(car_id);
      return res.status(201).json({
        status: 201,
        data: {
          id: postOrder[0].id,
          car_id,
          created_on: postOrder[0].created_on,
          status: foundCar[0].status,
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

  static async adjustOrder(req, res) {
    try {
      const foundOrder = await Orders.findByOrder(req.params.orderId);
      console.log(foundOrder)
      const updatedPrice = await Orders.adjustOrderPrice(parseInt(req.params.orderId, 10),
        req.body.price_offered);


      const {
        id, car_id, status, price_offered, 
      } = foundOrder[0];

      if (foundOrder[0].status !== 'pending') {
        return res.status(400).json({ status: 400, message: 'offer processed already' });
      }

      return res.status(201).json({
        status: 201,
        data: {
          id,
          car_id,
          status,
          old_price_offered: foundOrder[0].price_offered,
          new_price_offered: updatedPrice[0].price_offered,
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
