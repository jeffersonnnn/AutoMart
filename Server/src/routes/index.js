import express from 'express';
import postAdRouter from './post-ad-router';
import signInRouter from './sign-in-router';

const router = express.Router();

router.use(signInRouter, postAdRouter);

export default router;
