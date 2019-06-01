import express from 'express';
import PostAdValidate from '../middleware/PostAdValidate';
import AdvertController from '../controllers/carController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.post('/order', verifyAuthToken, PostAdValidate.postOrder, AdvertController.postOrder);

export default router;
