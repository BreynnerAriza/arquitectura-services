import pgService from "../services/pg.service.js"


export const getProductModel = async () => {
    const pg = new pgService();
    return await pg.connection.query(
        `SELECT * FROM PRODUCT`
    );
}

export async function getProductUniqueModel(id){
    try{
        const pg = new pgService();
        return await pg.connection.query(
            "SELECT * FROM PRODUCT WHERE NAME = $1", [id]
        );
    }catch(error){
        return "Esto es un error";
    }    
}

export const postProductModel = async(name, detail, value) =>{
    try{
        const pg = new pgService();
        return await pg.connection.one(
            "INSERT INTO PRODUCT (NAME,DETAIL,VALUE) VALUES ($1,$2,$3) RETURNING *",[name, detail, value]
        );
    }catch(error){
        return "Esto es un error";
    }    
}

export const putProductModel = async(id,name, detail, value) =>{
    try{
        const pg = new pgService();
        return await pg.connection.one(
            "UPDATE PRODUCT SET NAME = $1, DETAIL = $2 , VALUE = $3 WHERE ID_PRODUCT = $4 RETURNING *",[name, detail, value,id]
        );
    }catch(error){
        return "Esto es un error";
    }    
}