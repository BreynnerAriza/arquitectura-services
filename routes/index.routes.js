import { Router } from "express";
import routeProduct from "./product.routes.js";

const route = Router();

route.use('/product', routeProduct);

export default route;