import { Router } from "express";
import ProductController from "../controllers/product.controller.js";
import { validate } from "../middlewares/validator.middleware.js";
import { postProductValidator } from "../validators/product.validator.js";

const routeProduct  = Router();

routeProduct.get("/", ProductController.getProduct)
routeProduct.get("/:id", ProductController.getProductUnique)
routeProduct.post("/", validate(postProductValidator), ProductController.postProduct)
routeProduct.put("/:id",ProductController.putProduct)

export default routeProduct;
