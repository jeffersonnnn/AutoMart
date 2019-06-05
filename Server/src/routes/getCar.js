import express from 'express';
import AdvertController from '../controllers/carController';
import AdValidate from '../middleware/AdValidate';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.get(
  '/car/:carId/',
  verifyAuthToken,
  AdValidate.validateCarId,
  AdvertController.getCarById,
);

export default router;
