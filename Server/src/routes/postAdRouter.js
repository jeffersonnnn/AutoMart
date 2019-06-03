import express from 'express';
import PostAdValidate from '../middleware/AdValidate';
import AdvertController from '../controllers/carController';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.post('/car', verifyAuthToken, PostAdValidate.validatePostAd, AdvertController.postAd);

export default router;
