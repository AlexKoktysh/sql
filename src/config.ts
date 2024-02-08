import mysql from "mysql2";

export const config = mysql.createConnection({
    host: "localhost",
    // host: "db",
    user: "root",
    database: "db_test",
    password: "test",
});
export const pool = mysql
    .createPool({
        host: "localhost",
        // host: "db",
        user: "root",
        database: "db_test",
        password: "test",
    })
    .promise();
