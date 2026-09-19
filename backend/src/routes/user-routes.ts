import express from 'express';
import { createUserController } from '../controllers/user-controller';

const userRouter= express.Router();

userRouter.post('/', createUserController);

export default userRouter;