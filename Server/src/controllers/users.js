import User from '../models/userModel';
import JwtAuthenticate from '../utils/generateToken';

class UserController {
  static async registerUser(req, res) {
    try {
      const foundUser = await User.findByEmail(req.body.email);
      if (foundUser.length) {
        return res.status(400).json({
          success: false,
          message: 'Your account exists, please sign in',
        });
      }
      const newUser = await User.createUser(req.body);
      const { id, firstname, lastname, email } = newUser[0];

      const token = JwtAuthenticate({
        id,
        firstname,
        lastname,
        email,
      });

      return res.status(201).json({
        status: 201,
        data: {
          token,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          address: req.body.address,
          email: req.body.email,
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

export default UserController;
