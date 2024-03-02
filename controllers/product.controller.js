export const getProduct = (req, res) =>{
    res.status(200).json({msg : "Esto es get"})
}

export const postProduct = (req, res) =>{
    res.status(200).json({msg : "Esto es post"})
}

export default{
    getProduct,
    postProduct
}