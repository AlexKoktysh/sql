import { Router } from "express";
import { UsersController } from "../../controllers";

const { getUsers, addUser, deleteUser, updateUser } = UsersController;

const router = Router();

router.get("/", getUsers);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export const UserRouter = router;
