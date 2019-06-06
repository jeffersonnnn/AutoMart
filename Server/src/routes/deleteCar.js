import express from 'express';
import AdvertController from '../controllers/carController';
import AdValidate from '../middleware/AdValidate';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.delete(
  '/car/:carId/',
  verifyAuthToken,
  AdValidate.validateCarId,
  AdvertController.deleteSpecificCar,
);

export default router;
