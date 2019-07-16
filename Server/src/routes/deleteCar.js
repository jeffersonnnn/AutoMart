import express from 'express';
import CarsController from '../controllers/carsController';
import AdValidate from '../middleware/AdValidate';
import verifyAuthToken from '../middleware/verifyAuthToken';
import verifyAdmin from '../middleware/verifyAdmin';

const router = express.Router();

router.delete(
  '/car/:carId/',
  verifyAuthToken,
  AdValidate.validateCarId,
  verifyAdmin,
  CarsController.deleteCar,
);

export default router;
