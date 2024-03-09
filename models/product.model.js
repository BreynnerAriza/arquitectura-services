import pgService from "../services/pg.service.js"


export const getProductModel = async () => {
    const pg = new pgService();
    return await pg.connection.query(
        `SELECT * FROM PRODUCT`
    );
}


export async function getProductUniqueModel(){

}