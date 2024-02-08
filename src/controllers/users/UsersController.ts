import { Request, Response } from "express";
import { query } from "../../services/db";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const data = await query("SELECT * FROM users");
        res.send(data);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const addUser = async (req: Request, res: Response) => {
    try {
        const data = (await query(
            `INSERT INTO users (email, firstName, lastName) VALUES ('${req.body.email}', '${req.body.firstName}', '${req.body.lastName}');`,
        )) as { insertId: number };
        const result = await query(
            `SELECT * FROM users WHERE id = ${data.insertId as number} LIMIT 1;`,
        );
        data && res.send(result[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const result = await query(
            `SELECT * FROM users WHERE id = ${req.params.id} LIMIT 1;`,
        );
        const data = await query(
            `DELETE FROM users WHERE id=${req.params.id};`,
        );
        data && res.send(result[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const item = await query(
            `SELECT * FROM users WHERE id = ${req.params.id} LIMIT 1;`,
        );
        const data = await query(
            `UPDATE users SET email = '${req.body.email ?? item[0].email}', firstName = '${req.body.firstName ?? item[0].firstName}', lastName = '${req.body.lastName ?? item[0].lastName}' WHERE id = ${req.params.id};`,
        );
        const newItem = await query(
            `SELECT * FROM users WHERE id = ${req.params.id} LIMIT 1;`,
        );
        data && res.send(newItem[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};
