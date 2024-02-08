import { pool } from "../config";

export const query = async (sql: string) => {
    return pool.execute(sql).then((data) => data[0]);
};
