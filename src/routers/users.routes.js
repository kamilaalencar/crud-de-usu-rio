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

router.post("/users", verifyEmailAvailabilityMiddleware, createUserController);
router.get(
  "/users",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  listUsersController
);
router.get("/users/profile", verifyAuthTokenMiddleware, profileUserController);
router.patch(
  "/users/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  updateUserController
);
router.delete(
  "/users/:id",
  verifyAuthTokenMiddleware,
  verifyIsAdmMiddleware,
  deleteUserController
);
router.post("/login", userLoginController);

export default router;
