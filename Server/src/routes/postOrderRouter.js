import express from 'express';
import OrderController from '../controllers/orderController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.post('/order', verifyAuthToken, OrderController.postOrder);


export default router;
