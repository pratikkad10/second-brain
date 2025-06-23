import express from "express"
import { login, register } from "../controllers/auth.controller";
const userRoutes = express.Router();

userRoutes.post('/signup', register);
userRoutes.post('/signin', login);

export default userRoutes;