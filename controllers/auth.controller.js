import { getUser } from "../models/auth.models.js"
import { generateToken } from "../util/token.service.js";

export const loging = async (req, res) => {
    try{
        let {username, password} = req.query;
        let data = await getUser(username, password);

        if(!data){
            throw new Error("Los datos son incorrectos");
        }

        res.status(200).json({
            success: true,
            token: generateToken(data),
            msn: 'Logeado correctamente'
        });
    }catch(error){
        console.log(error.Error);
        res.status(401).json({
           success:false,
           token:'',
           msn: error.Error 
        });
    }
        
}