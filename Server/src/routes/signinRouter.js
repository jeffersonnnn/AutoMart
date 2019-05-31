import express from 'express';
import FormValidate from '../middleware/FormValidate';
import UserController from '../controllers/usersController';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to AutoMart API v1' });
});

router.post('/auth/signup', FormValidate.validateSignup, UserController.registerUser);
router.post('/auth/signin', UserController.signIn);

export default router;
