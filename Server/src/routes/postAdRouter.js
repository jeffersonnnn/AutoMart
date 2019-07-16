import express from 'express';
import PostAdValidate from '../middleware/AdValidate';
// import AdvertController from '../controllers/carsController';
import CarsController from '../controllers/carsController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.post('/car', verifyAuthToken, PostAdValidate.validatePostAd, CarsController.postAd);


export default router;
