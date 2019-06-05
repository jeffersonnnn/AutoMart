import express from 'express';
import AdValidate from '../middleware/AdValidate';
import AdvertController from '../controllers/carController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.patch(
  '/car/:carId/price',
  verifyAuthToken,
  AdValidate.adjustPrice,
  AdvertController.adjustCarPrice,
);

export default router;
