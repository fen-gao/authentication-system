import express from "express";
import * as authController from "../controllers/authController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/profile", authMiddleware, authController.getProfile);
router.put("/profile", authMiddleware, authController.updateProfile);
router.delete("/account", authMiddleware, authController.deleteAccount);
router.get("/logout", authController.logout);
router.get("/profiles", authMiddleware, authController.getProfiles);

export default router;
