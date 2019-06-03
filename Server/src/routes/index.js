import express from 'express';
import postAdRouter from './postAdRouter';
import signInRouter from './signinRouter';
import postOrderRouter from './postOrderRouter';
import adjustOrder from './adjustOrder';
import adjustStatus from './adjustStatus';

const router = express.Router();

router.use(signInRouter, postAdRouter, postOrderRouter, adjustOrder, adjustStatus);

export default router;
