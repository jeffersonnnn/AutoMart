import postAdValidate from '../utils/postAdValidation';

class ValidatePostAd {
  static validatePostAd(req, res, next) {
    const {
      manufacturer, model, price, state,
    } = req.body;

    const errors = [];

    if (!manufacturer) {
      errors.push('Please insert manufacturer');
    }

    if (!postAdValidate.manufacturer.test(manufacturer)) {
      errors.push('Insert alphabets only');
    }

    if (!model) {
      errors.push('Please insert model');
    }

    if (!price) {
      errors.push('Please insert price');
    }

    if (!postAdValidate.price.test(price)) {
      errors.push('Insert numbers only');
    }

    if (!state) {
      errors.push('Please insert state of vehicle');
    }

    if (!postAdValidate.state.test(state)) {
      errors.push('Insert alphabets only');
    }

    if (errors.length) {
      return res.status(406).json({ status: 406, error: errors });
    }
    return next();
  }
}

export default ValidatePostAd;
