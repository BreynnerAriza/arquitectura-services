import { Router } from "express";
import { loging } from "../controllers/auth.controller.js";

const routeAuth = Router();

routeAuth.use("/", loging);


export default routeAuth;