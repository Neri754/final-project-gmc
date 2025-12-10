import express from "express";
import {
  registeredUser,
  // updateUserName,
  // deleteUserAccount,
  loginUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/register", registeredUser);
router.post("/login", loginUser); // <-- NEW
// router.patch("/update-name", updateUserName);
// router.delete("/delete-account", deleteUserAccount);

export default router;
