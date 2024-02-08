import { Router } from "express";
import { ChatsController } from "../../controllers";

const { getChats, createChat, deleteChat, updateChat } = ChatsController;

const router = Router();

router.get("/", getChats);
router.post("/", createChat);
router.delete("/:id", deleteChat);
router.patch("/:id", updateChat);

export const ChatsRouter = router;
