import express from 'express';
import AdvertController from '../controllers/carController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.patch('/car/:carId/status', verifyAuthToken, AdvertController.adjustCarStatus);

export default router;
