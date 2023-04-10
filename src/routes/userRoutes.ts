import { Router } from 'express';
import { createUserController, loginUserController } from '../controllers/userController';

const userRouter = Router();

userRouter.post('/signup', createUserController);
userRouter.post('/login', loginUserController);


export default userRouter;
