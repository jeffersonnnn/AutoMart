import formValidate from '../utils/formValidation';

class ValidateForm {
  static validateSignup(req, res, next) {
    const {
      first_name, last_name, email, password,
    } = req.body;
    if (first_name === undefined || first_name === '') {
      return res.status(406).json({ status: 406, error: 'First name is required!' });
    }

    if (!formValidate.first_name.test(first_name)) {
      return res.status(406).json({ status: 406, error: 'Please input alphabets only' });
    }

    if (last_name === undefined || last_name === '') {
      return res.status(406).json({ status: 406, error: 'Last name is required!' });
    }

    if (!formValidate.last_name.test(last_name)) {
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
