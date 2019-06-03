import express from 'express';
import postAdRouter from './postAdRouter';
import signInRouter from './signinRouter';
import postOrderRouter from './postOrderRouter';
import adjustOrder from './adjustOrder';

const router = express.Router();

router.use(signInRouter, postAdRouter, postOrderRouter, adjustOrder);

export default router;
