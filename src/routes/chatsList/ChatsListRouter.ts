import { Router } from "express";
import { ChatsListController } from "../../controllers";

const { getUsersChat, addUserInChat, getChatsUser } = ChatsListController;

const router = Router();

router.get("/:id", getUsersChat);
router.post("/:id", addUserInChat);
router.get("/chats/:id", getChatsUser);

export const ChatsListRouter = router;
