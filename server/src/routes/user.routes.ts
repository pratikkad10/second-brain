import express from "express"
import { login, register } from "../controllers/auth.controller";
import { addcontent, deletecontent, getcontent } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/authMiddleware";
const userRoutes = express.Router();

userRoutes.post('/signup', register);
userRoutes.post('/signin', login);
userRoutes.post('/content',authMiddleware, addcontent);
userRoutes.get('/content',authMiddleware, getcontent);
userRoutes.delete('/content',authMiddleware, deletecontent);

export default userRoutes;