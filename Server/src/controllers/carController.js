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

    if (!adjustPrice) {
      res.status(400).json({ status: 400, message: 'sorry, this order does not exist' });
      return;
    }

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

    if (!adjustStatus) {
      res.status(400).json({ status: 400, message: 'sorry, this car does not exist' });
      return;
    }
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

  static adjustCarPrice(req, res) {
    const { price } = req.body;

    const adjustPrice = carModel.find(adjust => adjust.id === Number(req.params.carId));
    const newPrice = Object.assign({}, adjustPrice, { price });

    res.status(200).json({
      status: 200,
      data: {
        id: adjustPrice.id,
        email: adjustPrice.email,
        created_on: adjustPrice.createdOn,
        manufacturer: adjustPrice.manufacturer,
        model: adjustPrice.model,
        price: Number(newPrice.price),
        state: adjustPrice.state,
        status: adjustPrice.status,
      },
    });
  }

  static getCarById(req, res) {
    const { carId } = req.params;

    const getCar = carModel.find(search => search.id === Number(carId));
    if (!getCar) {
      res.status(400).json({ status: 400, message: 'sorry, this car does not exist' });
      return;
    }

    res.status(200).json({
      status: 200,
      data: {
        id: getCar.id,
        owner: getCar.owner,
        createdOn: getCar.createdOn,
        state: getCar.state,
        status: getCar.status,
        price: getCar.price,
        manufacturer: getCar.manufacturer,
        model: getCar.model,
        bodyType: getCar.bodyType,
      },
    });
  }

  static getAvailableCars(req, res) {
    const { status } = req.query;

    const getCars = carModel.filter(car => car.status === status);

    if (status !== 'available') {
      res.status(400).json({ status: 400, message: 'sorry, all cars are sold' });
      return;
    }

    res.status(200).json({
      status: 200,
      data: getCars,
    });
  }
}

export default AdvertController;
