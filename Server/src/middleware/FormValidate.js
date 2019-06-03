import formValidate from '../utils/formValidation';

class ValidateForm {
  static validateSignup(req, res, next) {
    const {
      firstName, lastName, email, password,
    } = req.body;
    if (firstName === undefined || firstName === '') {
      return res.status(406).json({ status: 406, error: 'First name is required!' });
    }

    if (!formValidate.firstName.test(firstName)) {
      return res.status(406).json({ status: 406, error: 'Please input alphabets only' });
    }

    if (lastName === undefined || lastName === '') {
      return res.status(406).json({ status: 406, error: 'Last name is required!' });
    }

    if (!formValidate.lastName.test(lastName)) {
      return res.status(406).json({ status: 406, error: 'Please input alphabets only' });
    }

    if (email === undefined || email === '') {
      return res.status(406).json({ status: 406, error: 'Email is required!' });
    }

    if (!formValidate.email.test(email)) {
      return res.status(406).json({ status: 406, error: 'invalid email' });
    }

    if (password === undefined || password === '') {
      return res.status(406).json({ status: 406, error: 'please insert password' });
    }

    return next();
  }
}

export default ValidateForm;
