import adValidate from '../utils/AdValidation';

class ValidateAd {
  static validatePostAd(req, res, next) {
    const {
      manufacturer, model, price, state,
    } = req.body;

    const errors = [];

    if (!manufacturer) {
      errors.push('Please insert manufacturer');
    }

    if (!adValidate.manufacturer.test(manufacturer)) {
      errors.push('Insert alphabets only');
    }

    if (!model) {
      errors.push('Please insert model');
    }

    if (!price) {
      errors.push('Please insert price');
    }

    if (!adValidate.price.test(price)) {
      errors.push('Insert numbers only');
    }

    if (!state) {
      errors.push('Please insert state of vehicle');
    }

    if (!adValidate.state.test(state)) {
      errors.push('Insert alphabets only');
    }

    if (errors.length) {
      return res.status(406).json({ status: 406, error: errors });
    }
    return next();
  }

  static postOrder(req, res, next) {
    const { carId, priceOffered } = req.body;

    const errors = [];

    if (!carId) {
      errors.push('Please select car');
    }

    if (!priceOffered) {
      errors.push('Please insert figure');
    }

    if (!adValidate.priceOffered.test(priceOffered)) {
      errors.push('Please enter numbers only');
    }

    if (errors.length) {
      return res.status(406).json({ status: 422, error: errors });
    }
    return next();
  }

  static adjustOrder(req, res, next) {
    const { amount } = req.body;

    if (amount === undefined) {
      return res.status(406).json({ status: 406, error: 'please input value' }); 
    }

    if (!adValidate.priceOffered.test(amount)) {
      return res.status(406).json({ status: 406, error: 'please insert numbers only' });
    }
    return next();
  }

  static adjustPrice(req, res, next) {
    const { price } = req.body;

    if (!adValidate.priceOffered.test(price)) {
      return res.status(406).json({ status: 406, error: 'please insert numbers only' });
    }
    
    if (!Number(price)) {
      return res.status(406).json({ status: 406, error: 'parameter must be a number' });
    }
    return next();
  }

  static validateOrderId(req, res, next) {
    const { orderId } = req.params;

    if (!Number(orderId)) {
      return res.status(406).json({ status: 406, error: 'parameter must be a number' });
    }
    return next();
  }

  static validateCarId(req, res, next) {
    const { carId } = req.params;

    if (!Number(carId)) {
      return res.status(406).json({ status: 406, error: 'parameter must be a number' });
    }
    return next();
  }
}

export default ValidateAd;
