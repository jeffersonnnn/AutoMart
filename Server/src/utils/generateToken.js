import jwt from 'jsonwebtoken';
import dotEnv from 'dotenv';

dotEnv.config();

const generateToken = (user) => {
  const payload = {
    id: user.id,
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email,
    address: user.address,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: 3600,
  });
  return token;
};

export default generateToken;
