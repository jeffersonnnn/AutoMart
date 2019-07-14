import express from 'express';
import CarsController from '../controllers/carsController';
// import AdValidate from '../middleware/AdValidate';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.get('/car/:carId/', verifyAuthToken, CarsController.getSpecificCar);
router.get('/car', CarsController.getAllAvailableCars);

export default router;
