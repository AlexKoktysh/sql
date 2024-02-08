import { Request, Response } from "express";
import { query } from "../../services/db";

export const getChats = async (req: Request, res: Response) => {
    try {
        const data = await query("SELECT * FROM chats");
        res.send(data);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const createChat = async (req: Request, res: Response) => {
    try {
        const data = (await query(
            `INSERT INTO chats (name) VALUES ('${req.body.name}');`,
        )) as { insertId: number };
        const result = await query(
            `SELECT * FROM chats WHERE id = ${data.insertId as number} LIMIT 1;`,
        );
        data && res.send(result[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const deleteChat = async (req: Request, res: Response) => {
    try {
        const result = await query(
            `SELECT * FROM chats WHERE id = ${req.params.id} LIMIT 1;`,
        );
        const data = await query(
            `DELETE FROM chats WHERE id=${req.params.id};`,
        );
        data && res.send(result[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const updateChat = async (req: Request, res: Response) => {
    try {
        const item = await query(
            `SELECT * FROM chats WHERE id = ${req.params.id} LIMIT 1;`,
        );
        const data = await query(
            `UPDATE chats SET name = '${req.body.name ?? item[0].name}' WHERE id = ${req.params.id};`,
        );
        const newItem = await query(
            `SELECT * FROM chats WHERE id = ${req.params.id} LIMIT 1;`,
        );
        data && res.send(newItem[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};
