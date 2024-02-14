import cors from "cors";
import express from "express";
import { json, urlencoded } from "body-parser";
import { config } from "./config";
import {
    UserRouter,
    ChatsRouter,
    ChatsListRouter,
    MessagesRouter,
    AuthRouter,
} from "./routes";

const app = express();
const port = 3000;

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

app.use("/user", UserRouter);
app.use("/chat", ChatsRouter);
app.use("/chats-list", ChatsListRouter);
app.use("/messages", MessagesRouter);
app.use("/auth", AuthRouter);

app.listen(port, async () => {
    config.connect((err) => {
        if (err) {
            return console.error("Ошибка: " + err.message);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");
            return console.log(
                `Express is listening at http://localhost:${port}`,
            );
        }
    });
});
