import jwt from 'jsonwebtoken';
import dotEnv from 'dotenv';

dotEnv.config();

const generateToken = (user) => {
  const payload = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 3600 });
  return token;
};

export default generateToken;
