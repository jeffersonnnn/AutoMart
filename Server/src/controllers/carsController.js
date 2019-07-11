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
}

export default CarsController;
