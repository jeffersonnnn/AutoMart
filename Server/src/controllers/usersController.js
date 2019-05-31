import userModel from '../models/usersModel';
import generateToken from '../utils/generateToken';

class UserController {
  static registerUser(req, res) {
    const {
      firstName, lastName, password, email, address,
    } = req.body;

    const id = userModel.length + 1;
    const userData = {
      id,
      firstName,
      lastName,
      password,
      email,
      address,
    };
    userModel.push(userData);

    return res.status(201).json({
      status: 201,
      data: {
        token: generateToken({
          id,
          firstName,
          lastName,
          email,
        }),
        id,
        firstName,
        lastName,
        email,
      },
    });
  }

  static signIn(req, res) {
    const { email, password } = req.body;

    const data = userModel.find(user => user.email === email && user.password === password);

    if (!data) {
      return res.status(400).json({
        status: 400,
        message: 'Email or password does not exist',
      });
    }

    const { id, firstName, lastName } = data;

    return res.status(200).json({
      status: 201,
      data: {
        token: generateToken({
          id,
          firstName,
          lastName,
        }),
        id,
        firstName,
        lastName,
        email,
      },
    });
  }
}

export default UserController;
