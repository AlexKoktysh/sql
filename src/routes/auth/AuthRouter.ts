import { Router } from "express";
import { AuthController } from "../../controllers";

const router = Router();

const { signUp, signIn, signOut, refreshToken } = AuthController;

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
router.get("/refresh-token", refreshToken);

export const AuthRouter = router;
