import { Request, Response } from "express";
import { query } from "../../services/db";

export const getChatMessages = async (req: Request, res: Response) => {
    try {
        const data = await query(
            `SELECT * FROM messages WHERE chatID = ${req.params.id};`,
        );
        res.send(data);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const addChatMessages = async (req: Request, res: Response) => {
    try {
        const data = (await query(
            `INSERT INTO messages (text, userID, chatID) VALUES ('${req.body.text}', ${req.query.userID}, ${req.params.id});`,
        )) as { insertId: number };
        const result = await query(
            `SELECT * FROM messages WHERE id = ${data.insertId as number} LIMIT 1;`,
        );
        data && res.send(result[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const getUserMessagesInChat = async (req: Request, res: Response) => {
    try {
        const data = await query(
            `SELECT * FROM messages WHERE chatID = ${req.params.id} AND userID = ${req.query.userID};`,
        );
        res.send(data);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const deleteMessage = async (req: Request, res: Response) => {
    try {
        const result = await query(
            `SELECT * FROM messages WHERE id = ${req.params.id} LIMIT 1;`,
        );
        const data = await query(
            `DELETE FROM messages WHERE id=${req.params.id};`,
        );
        data && res.send(result[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const updateMessage = async (req: Request, res: Response) => {
    try {
        const item = await query(
            `SELECT * FROM messages WHERE id = ${req.params.id} LIMIT 1;`,
        );
        const data = await query(
            `UPDATE messages SET text = '${req.body.text ?? item[0].name}' WHERE id = ${req.params.id};`,
        );
        const newItem = await query(
            `SELECT text FROM messages WHERE id = ${req.params.id} LIMIT 1;`,
        );
        data && res.send(newItem[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};
