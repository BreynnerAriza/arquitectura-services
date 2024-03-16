import jwt, { decode }  from "jsonwebtoken";
import { env } from "../config/default.js";
function response(res){
    return res.status(401).json({
        success:false,
        msn:"authorization requred"
    });
}
export const verifyToken = (req, res, next) => {
    let token = req.headers["authorization"];
    if(!token){
        return response(res);        
    }
    token  = token.split(" ");
    if(token[0] !== 'Bearer'){
        return response(res);
    }
    jwt.verify(token[1], env.secret, (err, decode) =>{
        if(err){
            return response(res);
        }
        next(); 
    });
       
}