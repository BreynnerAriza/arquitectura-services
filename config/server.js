import express from "express";
import route from "../routes/index.routes.js";
import pgService from "../services/pg.service.js";
import {env} from "./default.js"

export default class Server{

    constructor(){
        this.app = express();
        this.port = env.port || 8000;
    }

    connectionDB(){
        new pgService();
    }

    middlewares(){
        this.app.use(express.json());
    }

    routes(){
        this.app.use(route)
    }

    runServer(){
        this.app.listen(this.port, () =>{
            console.log(`Estoy por el puerto ${this.port}`)
        })  
    }

    load(){
        this.connectionDB();
        this.middlewares();
        this.routes();
        this.runServer();
    }
}