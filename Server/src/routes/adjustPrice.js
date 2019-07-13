import express from 'express';
import AdValidate from '../middleware/AdValidate';
import CarsController from '../controllers/carsController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.patch(
  '/car/:carId/price',
  verifyAuthToken,
  AdValidate.adjustPrice,
  CarsController.adjustCarPrice,
);

export default router;
