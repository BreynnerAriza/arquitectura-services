import express from "express";
import route from "../routes/index.routes.js";
import {env} from "./default.js"

export default class Server{

    constructor(){
        this.app = express();
        this.port = env.port || 8000;
    }

    connectionDB(){}

    middlewares(){}

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