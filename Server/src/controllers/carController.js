import carModel from '../models/carModel';
import orderModel from '../models/orderModel';

/**
 * @class CarController
 * @description Specifies which method handles a given request for a specific endpoint
 * @exports CarController
 * @param {req} : The request object sent in the body
 * @param {res} : The reponse object sent by the server to the user
 */

class AdvertController {
  /**
   * @method postAd : Adds a new car advert to the collection
   */

  static postAd(req, res) {
    const {
      manufacturer, model, price, state, status,
    } = req.body;

    const id = carModel.length + 1;
    const carData = {
      id,
      created_on: new Date(),
      manufacturer,
      model,
      price,
      state,
      status: status || 'available',
    };

    carModel.push(carData);

    res.status(201).json({
      status: 201,
      data: carData,
    });
  }

  static postOrder(req, res) {
    const { carId, priceOffered } = req.body;

    const exactCar = carModel.find(car => car.id === carId);
    if (!exactCar) {
      res.status(404).json({ status: 404, message: 'Car does not exist' });
      return;
    }

    const id = orderModel.length + 1;
    const purchaseData = {
      id,
      carId,
      created_on: new Date(),
      price: exactCar.price,
      priceOffered: priceOffered || 'pending',
    };

    orderModel.push(purchaseData);

    res.status(201).json({
      status: 201,
      data: purchaseData,
    });
  }
}

export default AdvertController;
