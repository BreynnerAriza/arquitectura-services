import { getProductModel, getProductUniqueModel } from "../models/product.model.js"

export const getProduct = async (req, res) =>{
    let data = getProductModel();
    res.status(200).json({msg : "Esto es get", data:data})
}

export const getProductUnique = (req, res) =>{
    let data = getProductUniqueModel();
    res.status(200).json({msg : "Esto es get"})
}

export const postProduct = (req, res) =>{
    res.status(200).json({msg : "Esto es post"})
}

export default{
    getProduct,
    postProduct
}