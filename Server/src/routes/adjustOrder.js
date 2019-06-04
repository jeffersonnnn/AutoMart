import express from 'express';
import AdValidate from '../middleware/AdValidate';
import AdvertController from '../controllers/carController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.patch(
  '/order/:orderId/price',
  verifyAuthToken,
  AdValidate.adjustOrder,
  AdValidate.validateParams,
  AdvertController.adjustOrder,
);

export default router;
