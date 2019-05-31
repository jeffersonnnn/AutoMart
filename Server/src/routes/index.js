import express from 'express';
import postAdRouter from './postAdRouter';
import signInRouter from './signinRouter';

const router = express.Router();

router.use(signInRouter, postAdRouter);

export default router;
