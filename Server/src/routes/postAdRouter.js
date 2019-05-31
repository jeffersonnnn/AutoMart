import express from 'express';
import PostAdValidate from '../middleware/PostAdValidate';
import AdvertController from '../controllers/carController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.post('/auth/car', verifyAuthToken, PostAdValidate.validatePostAd, AdvertController.postAd);

export default router;
