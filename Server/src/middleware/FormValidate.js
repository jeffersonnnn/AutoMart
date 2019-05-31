import formValidate from '../utils/formValidation';

class ValidateForm {
  static validateSignup(req, res, next) {
    const { firstName, lastName, email } = req.body;
    if (!formValidate.firstName.test(firstName)) {
      return res.status(406).json({ status: 406, error: 'Please input alphabets only' });
    }
    if (!formValidate.lastName.test(lastName)) {
      return res.status(406).json({ status: 406, error: 'Please input alphabets only' });
    }
    if (!formValidate.email.test(email)) {
      return res.status(406).json({ status: 406, error: 'invalid email' });
    }
    return next();
  }
}

export default ValidateForm;
