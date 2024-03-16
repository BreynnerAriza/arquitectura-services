import pgService from "../services/pg.service.js";

export const getUser = async (username, password) => {
    const pg = new pgService();
    return await pg.connection.oneOrNone(
        `SELECT USERNAME FROM USERS 
        WHERE USERNAME = $1 AND PASSWORD = $2`,
         [username, password]);
}