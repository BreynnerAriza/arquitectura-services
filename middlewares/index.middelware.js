import { Router } from "express";
import { verifyToken } from "./token.middleware.js";

const middleware = Router();

middleware.use("/product",verifyToken);

export default middleware;