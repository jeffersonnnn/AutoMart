import express from 'express';
import CarsController from '../controllers/carsController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.patch('/car/:carId/status', verifyAuthToken, CarsController.adjustCarStatus);

export default router;
