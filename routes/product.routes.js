import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const routeProduct  = Router();

routeProduct.get("/", ProductController.getProduct)
routeProduct.post("/", ProductController.postProduct)

export default routeProduct;