import express from 'express';
import { login, register } from '../controllers/user.controller.js';
const router = express.Router();
router.route("/register").post(register)
router.route("/login").post(login) // Assuming login is handled by the same controller for simplicity
export default router;