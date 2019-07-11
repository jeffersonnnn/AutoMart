import express from 'express';
// import PostAdValidate from '../middleware/AdValidate';
import OrderController from '../controllers/orderController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

// router.post('/order', verifyAuthToken, PostAdValidate.postOrder, AdvertController.postOrder);
router.post('/order', verifyAuthToken, OrderController.postOrder);


export default router;
