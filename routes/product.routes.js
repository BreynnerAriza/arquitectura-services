import { Router } from "express";
import ProductController from "../controllers/product.controller.js";

const routeProduct  = Router();

routeProduct.get("/", ProductController.getProduct)
routeProduct.get("/:id", ProductController.getProductUnique)
routeProduct.post("/", ProductController.postProduct)
routeProduct.put("/:id",ProductController.putProduct)

export default routeProduct;