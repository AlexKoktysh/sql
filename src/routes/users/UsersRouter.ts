import { Router } from "express";
import { UsersController } from "../../controllers";

const { getUsers, addUser, deleteUser, updateUser, getProfileInfo } =
    UsersController;

const router = Router();

router.get("/", getUsers);
router.get("/profile", getProfileInfo);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export const UserRouter = router;
