import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";

const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get("", listUsersController);

export default router;
