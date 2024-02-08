import { Router } from "express";
import { MessagesController } from "../../controllers";

const {
    getChatMessages,
    getUserMessagesInChat,
    deleteMessage,
    updateMessage,
    addChatMessages,
} = MessagesController;

const router = Router();

router.get("/user/:id", getUserMessagesInChat);
router.get("/:id", getChatMessages);
router.post("/:id", addChatMessages);
router.delete("/:id", deleteMessage);
router.patch("/:id", updateMessage);

export const MessagesRouter = router;
