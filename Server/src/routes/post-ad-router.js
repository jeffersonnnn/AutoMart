import express from 'express';
import PostAdValidate from '../middleware/PostAdValidate';
import AdvertController from '../controllers/advert-controller';
import verifyAuthToken from '../middleware/verifyAuthToken';

const router = express.Router();

router.post('/car/', verifyAuthToken, PostAdValidate.validatePostAd, AdvertController.postAd);

export default router;
