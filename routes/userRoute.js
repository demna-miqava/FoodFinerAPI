import express from "express";
import {
  getUserInfo,
  login,
  refreshToken,
  register,
} from "../controllers/user.js";

const router = express.Router();

router.get("/:id", getUserInfo);

router.post("/refresh", refreshToken);

router.post("/signup", register);

router.post("/signin", login);

export default router;
