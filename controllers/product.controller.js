import { getProductModel, getProductUniqueModel, postProductModel,putProductModel } from "../models/product.model.js"

export const getProduct = async (req, res) =>{
    let data  = await getProductModel();
    res.status(200).json({msg : "Esto es get", data:data})
}

export const getProductUnique = async (req, res) =>{
    let {id} = req.params;
    let data = await getProductUniqueModel(id);
    res.status(200).json({msg : "Esto es get", data:data})
}

export const postProduct = async (req, res) =>{
    let {name, detail, value} = req.body;
    let data = await postProductModel(name, detail, value);
    res.status(200).json({msg : "Esto es post",data:data})
}

export const putProduct = async (req, res) =>{
    let {id} = req.params;
    let {name, detail, value} = req.body;
    let data = await putProductModel(id,name, detail, value);
    res.status(200).json({msg : "Esto es put",data:data})
}

export default{
    getProduct,
    getProductUnique,
    postProduct,
    putProduct
}