import express from 'express';
import AdValidate from '../middleware/AdValidate';
import OrderController from '../controllers/orderController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.patch(
  '/order/:orderId/price',
  verifyAuthToken,
  // AdValidate.adjustOrder,
  // AdValidate.validateOrderId,
  OrderController.adjustOrder,
);

export default router;
