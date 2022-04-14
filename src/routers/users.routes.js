import { Router } from "express";

import createUserController from "../controllers/createUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import profileUserController from "../controllers/profileUser.controller";

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import verifyIsAdmMiddleware from "../middlewares/verifyIsAdm.middleware";
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.post("", verifyEmailAvailabilityMiddleware, createUserController);
router.get("", verifyAuthTokenMiddleware, listUsersController);
router.patch("/:id", verifyIsAdmMiddleware, updateUserController);
router.delete("/:id", verifyIsAdmMiddleware, deleteUserController);
router.post("/login", userLoginController);
router.get("/profile", verifyAuthTokenMiddleware, profileUserController);

export default router;
