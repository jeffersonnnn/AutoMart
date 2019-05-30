import userModel from '../models/users-model';
import generateToken from '../utils/generate-token';

class UserController {
  static registerUser(req, res) {
	const { first_name, last_name, password, email, address } = req.body;

	const id = userModel.length + 1;

	const userData = {
		id, 
		first_name, 
		last_name, 
		password, 
		email,
		address
	}
	userModel.push(userData);
	return res.status(201).json({
		status: 201,
		data: {
			token: generateToken(id, first_name, last_name, email),
			id,
			first_name,
			last_name,
			email
		}
	})
  }
}

export default UserController;