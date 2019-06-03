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

  static adjustOrder(req, res) {
    const { amount } = req.body;

    const adjustPrice = orderModel.find(adjust => adjust.id === Number(req.params.orderId));

    const newPrice = Object.assign({}, adjustPrice, { amount });

    if (adjustPrice.status !== 'pending') {
      res.status(400).json({ status: 400, message: 'offer processed already' });
      return;
    }

    res.status(200).json({
      status: 200,
      data: {
        id: adjustPrice.id,
        car_id: adjustPrice.carId,
        status: adjustPrice.status,
        oldPriceOffered: adjustPrice.amount,
        newPriceOffered: Number(newPrice.amount),
      },
    });
  }

  static adjustCarStatus(req, res) {
    const { status } = req.body;

    const adjustStatus = carModel.find(adjust => adjust.id === Number(req.params.carId));
    // console.log(Number(req.params.id));
    const newStatus = Object.assign({}, adjustStatus, { status });

    res.status(200).json({
      status: 200,
      data: {
        id: adjustStatus.id,
        email: adjustStatus.email,
        created_on: adjustStatus.createdOn,
        manufacturer: adjustStatus.manufacturer,
        model: adjustStatus.model,
        price: adjustStatus.price,
        state: adjustStatus.state,
        status: newStatus.status,
      },
    });
  }
}

export default AdvertController;
