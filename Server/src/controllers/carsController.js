import Cars from '../models/carsModel';

class CarsController {
  static async postAd(req, res) {
    try {
      const postAd = await Cars.postCars(req.body, req.authUser.id);

      const {
        manufacturer, model, price, state, image_url,
      } = req.body;

      return res.status(201).json({
        status: 201,
        data: {
          id: postAd[0].id,
          email: req.authUser.email,
          created_on: postAd[0].created_on,
          manufacturer,
          model,
          price,
          state,
          image_url,
          status: postAd[0].status,
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

  static async adjustCarStatus(req, res) {
    try {
      const foundCar = await Cars.findById(parseInt(req.params.carId, 10));

      if (!foundCar.length) {
        return res.status(404).json({ status: 404, message: 'sorry, this car does not exist' });
      }

      const updatedStatus = await Cars.adjustCarStatus(
        parseInt(req.params.carId, 10), req.body.status,
      );

      const {
        id, created_on, manufacturer, model, price, state, image_url,
      } = foundCar[0];


      return res.status(201).json({
        status: 201,
        data: {
          id,
          email: req.authUser.email,
          created_on,
          manufacturer,
          model,
          price,
          state,
          image_url,
          status: updatedStatus[0].status,
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

  static async adjustCarPrice(req, res) {
    try {
      const foundAd = await Cars.findById(parseInt(req.params.carId, 10));
      const updatedAdPrice = await Cars.adjustCarPrice(
        parseInt(req.params.carId, 10), req.body.price,
      );
      const {
        id, created_on, manufacturer, model, state, image_url,
      } = foundAd[0];

      return res.status(201).json({
        status: 201,
        data: {
          id,
          email: req.authUser.email,
          created_on,
          manufacturer,
          model,
          price: updatedAdPrice[0].price,
          state,
          image_url,
          status: foundAd[0].status,
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

  static async getSpecificCar(req, res) {
    try {
      const findCar = await Cars.findById(parseInt(req.params.carId, 10));    

      const {
        id, owner, created_on, state, price, status, manufacturer, model, body_type, image_url,
      } = findCar[0];

      if (!findCar) {
        return res.status(400).json({ status: 400, message: 'sorry, this car does not exist' });
      }

      return res.status(200).json({
        status: 200,
        data: {
          id,
          owner,
          created_on,
          state,
          status,
          price,
          manufacturer,
          model,
          image_url,
          body_type,
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

  static async getAllAvailableCars(req, res) {
    try {
      const getCars = await Cars.getCarsWithinRange(
        req.query.status, req.query.min_price, req.query.max_price,
      );
      if (!getCars.length) {
        return res.status(400).json({ status: 400, message: 'sorry, all cars are sold' });  
      }

      return res.status(200).json({
        status: 200,
        data: getCars,
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

export default CarsController;
