import { Request, Response } from "express";
import ms from "ms";
import { compare } from "bcryptjs";
import { query } from "../../services/db";
import {
    // hashPassword,
    getTokens,
    getRequestUser,
} from "../crypto/CryptoController";

export const signUp = async (req: Request, res: Response) => {
    try {
        // const isEmailExists = !!(await query(
        //     `SELECT * FROM users WHERE users.email = '${req.body.email}';`,
        // ));
        // if (isEmailExists) {
        //     return res.status(404).send({ error: "Email already exists" });
        // }
        // const password = await hashPassword(req.body.password);
        const data = (await query(
            `INSERT INTO users (email, password, firstName, lastName) VALUES ('${req.body.email}', '${req.body.password}', '', '');`,
        )) as { insertId: number };
        const result = await query(
            `SELECT * FROM users WHERE id = ${data.insertId as number} LIMIT 1;`,
        );
        const { accessToken, refreshToken } = getTokens(req.body.email);
        res.cookie("access-token", accessToken, {
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            expires: new Date(Date.now() + ms("24h")),
        });
        res.cookie("refresh-token", refreshToken, {
            httpOnly: true,
            sameSite: "strict",
            path: "/",
            expires: new Date(Date.now() + ms("3 days")),
        });
        data && res.send(result[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const signIn = async (req: Request, res: Response) => {
    try {
        const user = await query(
            `SELECT * FROM users WHERE users.email = ${req.body.email};`,
        );
        if (!user) {
            return res.status(404).send({ error: "Wrong email or password." });
        }
        const isPasswordValid = await compare(
            req.body.password,
            user[0].password,
        );
        if (!isPasswordValid) {
            return res.status(404).send({ error: "Wrong email or password." });
        }
        const { accessToken, refreshToken } = getTokens(req.body.email);
        res.cookie("access-token", accessToken, {
            httpOnly: true,
            path: "/",
            expires: new Date(Date.now() + ms("24h")),
        });
        res.cookie("refresh-token", refreshToken, {
            httpOnly: true,
            path: "/",
            expires: new Date(Date.now() + ms("3 days")),
        });
        res.send(user[0]);
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const signOut = async (req: Request, res: Response) => {
    try {
        res.clearCookie("refresh-token");
        res.clearCookie("access-token");
        res.status(403).send({ message: "Successfully signed out" });
    } catch (error) {
        res.status(500).send({ error });
    }
};

export const refreshToken = async (req: Request, res: Response) => {
    try {
        const user = await getRequestUser(req);
        if (user?.email) {
            const { accessToken, refreshToken } = getTokens(user.email);
            res.cookie("access-token", accessToken, {
                httpOnly: true,
                path: "/",
                expires: new Date(Date.now() + ms("24h")),
            });
            res.cookie("refresh-token", refreshToken, {
                httpOnly: true,
                path: "/",
                expires: new Date(Date.now() + ms("3 days")),
            });
            res.send({ message: "Token successfully refreshed" });
        }
    } catch (error) {
        res.status(500).send({ error });
    }
};
