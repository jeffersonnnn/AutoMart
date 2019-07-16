import express from 'express';
import CarsController from '../controllers/carsController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.get('/car/:carId/', verifyAuthToken, CarsController.getSpecificCar);
router.get('/car', verifyAuthToken, CarsController.getAllAvailableCars);


export default router;
