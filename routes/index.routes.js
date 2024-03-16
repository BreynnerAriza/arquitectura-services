import { Router } from "express";
import routeAuth from "./auth.routes.js";
import routeProduct from "./product.routes.js";

const route = Router();

route.use('/product', routeProduct);
route.use('/auth', routeAuth);

export default route;