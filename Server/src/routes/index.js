import express from 'express';
import postAdRouter from './postAdRouter';
import signInRouter from './signinRouter';
import postOrderRouter from './postOrderRouter';

const router = express.Router();

router.use(signInRouter, postAdRouter, postOrderRouter);

export default router;
