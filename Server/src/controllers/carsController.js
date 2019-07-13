import Cars from '../models/carsModel';

class CarsController {
  static async postAd(req, res) {
    try {
      const postAd = await Cars.postCars(req.body, req.authUser.id);

      const {
        manufacturer, model, price, state, status,
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
          status: status || postAd[0].status,
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
        id, created_on, manufacturer, model, price, state,
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

  static async adjustCarPrice (req, res) {
    try {
      const foundAd = await Cars.findById(parseInt(req.params.carId, 10));
      const updatedAdPrice = await Cars.adjustCarPrice(
        parseInt(req.params.carId, 10), req.body.price,
      ); 
      const {
        id, created_on, manufacturer, model, state, status,
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
          status,
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

export default CarsController;
