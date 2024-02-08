import { Request, Response } from "express";
import { query } from "../../services/db";

export const getUsersChat = async (req: Request, res: Response) => {
    try {
        const data = await query(
            `SELECT users.firstName, users.lastName, users.email, users.id FROM UserChat JOIN users ON UserChat.userID = users.id WHERE UserChat.chatID = ${req.params.id};`,
        );
        res.send(data);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const getChatsUser = async (req: Request, res: Response) => {
    try {
        const data = await query(
            `SELECT chats.name, chats.id FROM UserChat JOIN chats ON UserChat.chatID = chats.id WHERE UserChat.userID = ${req.params.id};`,
        );
        res.send(data);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const addUserInChat = async (req: Request, res: Response) => {
    try {
        const data = await query(
            `INSERT INTO UserChat VALUES (${req.body.userID}, ${req.params.id});`,
        );
        const result = await query(
            `SELECT users.firstName, users.lastName, users.email, users.id FROM UserChat JOIN users ON UserChat.userID = users.id WHERE UserChat.chatID = ${req.params.id} AND UserChat.userID = ${req.body.userID};`,
        );
        data && res.send(result[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};
