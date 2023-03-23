import { Router } from "express";
import { CreateUserController } from "../controller/users/CreateUserController.js";
import { LoginUserController } from "../controller/users/LoginUserController.js";

import { ValidateUserController } from "../controller/users/ValideUserController.js";

const userRouter = Router();

const createUserController = new CreateUserController();
userRouter.post('/users', createUserController.handle);

const loginUserController = new LoginUserController();
userRouter.post('/users/login', loginUserController.handle);

const validateUserController = new ValidateUserController();
userRouter.post('/users/validate', validateUserController.handle);
export { userRouter };