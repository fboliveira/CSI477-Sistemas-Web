import { Router } from "express";
import { CreateUserController } from "../controller/users/CreateUserController.js";
import { LoginUserController } from "../controller/users/LoginUserController.js";

import { ValidateUserController } from "../controller/users/ValidateUserController.js";

const userRouter = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const validateUserController = new ValidateUserController();

userRouter.post('/users', createUserController.handle);
userRouter.post('/users/login', loginUserController.handle);
userRouter.post('/users/validate', validateUserController.handle);

export { userRouter };