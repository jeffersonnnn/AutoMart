import formValidate from '../utils/form-validation';

class ValidateForm {
  static validateSignup(req, res, next) {
    const { first_name, last_name, email } = req.body;
    if (!formValidate.first_name.test(first_name)) {
      return res.status(406).json({ status: 406, error: 'Please input alphabets only' });
    }
    if (!formValidate.last_name.test(last_name)) {
      return res.status(406).json({ status: 406, error: 'Please input alphabets only' });
    }
    if (!formValidate.email.test(email)) {
      return res.status(406).json({ status: 406, error: 'invalid email' });
    }
    return next();
  }
}

export default ValidateForm;
