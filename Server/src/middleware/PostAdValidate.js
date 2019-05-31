import postAdValidate from '../utils/post-ad-validation';

class ValidatePostAd {
  static validatePostAd(req, res, next) {
    const {
      email, manufacturer, model, price, state, status,
    } = req.body;

    if (!email) {
      return res.status(406).json({ status: 406, error: 'Please insert email' });
    }

    if (!postAdValidate.email.test(email)) {
      return res.status(406).json({ status: 406, error: 'invalid email' });
    }

    if (!manufacturer) {
      return res.status(406).json({ status: 406, error: 'Please insert manufacturer' });
    }

    if (!postAdValidate.manufacturer.test(manufacturer)) {
      return res.status(406).json({ status: 406, error: 'Insert alphabets only' });
    }

    if (!model) {
      return res.status(406).json({ status: 406, error: 'Please insert model' });
    }

    if (!postAdValidate.model.test(model)) {
      return res.status(406).json({ status: 406, error: 'Insert alphabets and numbers only' });
    }

    if (!price) {
      return res.status(406).json({ status: 406, error: 'Please insert price' });
    }

    if (!postAdValidate.price.test(price)) {
      return res.status(406).json({ status: 406, error: 'Insert numbers only' });
    }

    if (!state) {
      return res.status(406).json({ status: 406, error: 'Please insert state of vehicle' });
    }

    if (!postAdValidate.state.test(state)) {
      return res.status(406).json({ status: 406, error: 'Insert alphabets only' });
    }

    if (!status) {
      return res.status(406).json({ status: 406, error: 'Please insert status of vehicle' });
    }

    if (!postAdValidate.status.test(status)) {
      return res.status(406).json({ status: 406, error: 'Insert alphabets only' });
    }
    return next();
  }
}

export default ValidatePostAd;
