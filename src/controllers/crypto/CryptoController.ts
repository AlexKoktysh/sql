import { Request } from "express";
import { query } from "../../services/db";
import { genSalt, hash } from "bcryptjs";
import jwt from "jsonwebtoken";

class JwtPayloadDto {
    readonly id: string;
    readonly email: string;
}

export const hashPassword = async (password: string) => {
    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    return hashPassword;
};

export const getTokens = (email: string) => {
    const accessToken = jwt.sign({ email }, "SECRET_KEY_ACCESS", {
        expiresIn: "24h",
    });
    const refreshToken = jwt.sign({ email }, "SECRET_KEY_REFRESH", {
        expiresIn: "3d",
    });
    return { accessToken, refreshToken };
};

export const getRequestUser = async (req: Request) => {
    const token =
        // req.cookies["refresh-token"]
        req.headers.cookie
            .split(";")
            .find((el) => el.trim().includes("refresh-token"))
            .split("=")[1];
    const userPayload = jwt.verify(
        token,
        "SECRET_KEY_REFRESH",
    ) as JwtPayloadDto;
    const user = await query(
        `SELECT * FROM users WHERE users.email = '${userPayload.email}';`,
    );
    return user[0];
};
