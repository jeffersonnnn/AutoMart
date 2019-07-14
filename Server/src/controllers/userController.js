import User from '../models/userModel';
import JwtAuthenticate from '../utils/generateToken';
import Password from '../utils/password';

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
      const {
        id, first_name, last_name, email,
      } = newUser[0];

      const token = JwtAuthenticate({
        id,
        first_name,
        last_name,
        email,
      });

      return res.status(201).json({
        status: 201,
        data: {
          token,
          id: newUser[0].id,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
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

  static async signIn(req, res) {
    try {
      const foundUser = await User.findByEmail(req.body.email);

      if (!foundUser.length) {
        return res.status(400).json({
          success: false,
          message: 'Email or Password incorrect',
        });
      }

      const isPasswordValid = await Password.comparePassword(
        req.body.password, foundUser[0].password,
      );

      if (!isPasswordValid) {
        return res.status(400).json({
          success: false,
          message: 'Email or Password incorrect',
        });
      }

      const {
        id, first_name, last_name, email,
      } = foundUser[0];

      const token = JwtAuthenticate({
        id,
        first_name,
        last_name,
        email,
      }); 
      return res.status(200).json({
        status: 200,
        data: {
          token,
          id,
          first_name: first_name,
          last_name: last_name,
          email,
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
