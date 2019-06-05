import express from 'express';
import AdValidate from '../middleware/AdValidate';
import AdvertController from '../controllers/carController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.patch(
  '/order/:orderId/price',
  verifyAuthToken,
  AdValidate.adjustOrder,
  AdValidate.validateOrderId,
  AdvertController.adjustOrder,
);

export default router;
