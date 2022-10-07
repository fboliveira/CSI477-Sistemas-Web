import { Router } from "express";
import { CreateUserController } from "../controller/users/CreateUserController.js";
import { LoginUserController } from "../controller/users/LoginUserController.js";

const userRouter = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();

userRouter.post('/users', createUserController.handle);
userRouter.post('/users/login', loginUserController.handle);

export { userRouter };