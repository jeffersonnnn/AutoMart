import express from 'express';
import postAdRouter from './postAdRouter';
import signInRouter from './signinRouter';
import postOrderRouter from './postOrderRouter';
import adjustOrder from './adjustOrder';
import adjustStatus from './adjustStatus';
import adjustCarPrice from './adjustPrice';
import getCar from './getCar';

const router = express.Router();

router.use(signInRouter,
  postAdRouter,
  postOrderRouter,
  adjustOrder,
  adjustStatus,
  adjustCarPrice,
  getCar);

export default router;
